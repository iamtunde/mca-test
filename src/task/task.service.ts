import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserService } from 'src/user/user.service';
import { PurchaseService } from 'src/purchase/purchase.service';
import { QUERY_BATCH_SIZE } from 'src/core/constants';
import { EmailQueue } from 'src/shared/email/email.queue';
import { EmailJobData } from 'src/shared/email/email.interface';

@Injectable()
export class TaskService {
    constructor(
        private readonly userService: UserService,
        private readonly purchaseService: PurchaseService,
        private readonly emailQueue: EmailQueue
    ){}

    private readonly logger = new Logger(TaskService.name)

    @Cron(CronExpression.EVERY_5_MINUTES)
    async handleCron() {
        const batchSize = QUERY_BATCH_SIZE
        let offset = 0
        let countCustomers = 0

        while (true) {
            const customers = await this.userService.findByRole('customer', offset, batchSize)

            if(customers.length === 0) {
                break;
            }

            for(const customer of customers) {
                const customerRecentPurchase = await this.purchaseService.findCustomerLastPurchase(customer.id)[0]
    
                if(customerRecentPurchase.length === 0) {
                    break;
                }
                
                const emailPayload: EmailJobData = {
                    to: customer.email,
                    subject: 'We want to hear from you',
                    text: `Kindly leave a feedback on your recently purchased policy ${customerRecentPurchase.policy.title}`,
                }

                await this.emailQueue.addEmailJob(emailPayload)
            }

            offset += batchSize
            countCustomers++
        }
        this.logger.debug(`Feedback script executed for ${countCustomers} customers.`);
    }
}

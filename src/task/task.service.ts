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
            /* get customers from the database in batch */
            const customers = await this.userService.findByRole('customer', offset, batchSize)

            /* check if there are records */
            if(customers.length === 0) {
                break;
            }

            /* loop customers records */
            for(const customer of customers) {

                /* get individual customer recent purchase */
                const customerRecentPurchase = await this.purchaseService.findCustomerLastPurchase(customer.id)[0]

                /* check if there is a match */
                if(customerRecentPurchase.length === 0) {
                    break;
                }
                
                /* prepare email payload to send via job */
                const emailPayload: EmailJobData = {
                    to: customer.email,
                    subject: 'We want to hear from you',
                    text: `Kindly leave a feedback on your recently purchased policy ${customerRecentPurchase.policy.title}`,
                }

                /* queue email job */
                await this.emailQueue.addEmailJob(emailPayload)
            }

            /* increase offset for next cron */
            offset += batchSize

            /* count processed customer batch */
            countCustomers++
        }

        /* log feedback console */
        this.logger.debug(`Feedback script executed for ${countCustomers} customers.`);
    }
}

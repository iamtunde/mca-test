import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserService } from 'src/user/user.service';
import { PurchaseService } from 'src/purchase/purchase.service';
import { QUERY_BATCH_SIZE } from 'src/core/constants';
import { IEmailPayload } from 'src/shared/email/email.interface';
import { PolicyService } from 'src/policies/policy.service';
import { EmailProcessor } from 'src/shared/email/email.processor';

@Injectable()
export class TaskService {
    constructor(
        private readonly userService: UserService,
        private readonly purchaseService: PurchaseService,
        private readonly policyService: PolicyService,
        private readonly emailProcessor: EmailProcessor
    ){}

    private readonly logger = new Logger(TaskService.name)

    /* run the schedule every 5 minutes */
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
                const customerRecentPurchase = await this.purchaseService.findCustomerLastPurchase(customer.id)
                
                const policy = await this.policyService.getOne(customerRecentPurchase.policyId)
                
                /* prepare email payload to send via job */
                const emailPayload: IEmailPayload = {
                    to: customer.email,
                    subject: 'We want to hear from you',
                    text: `Kindly leave a feedback on your recently purchased policy ${policy.name}`,
                }

                /* send email */
                await this.emailProcessor.sendEmail(emailPayload)
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

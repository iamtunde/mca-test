import { Processor, Process } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { emailConfig } from './email.config';
import { EmailJobData } from './email.interface';
import * as dotenv from 'dotenv'
dotenv.config()

@Injectable()
@Processor('email')
export class EmailProcessor {
    @Process('send')
    async sendEmail(emailData: EmailJobData) {
        const transporter = nodemailer.createTransport(emailConfig);
        console.log({transporter})
        const mailOptions = {
            from: `"Support Team"<${process.env.MAIL_FROM}>`,
            to: emailData.to,
            subject: emailData.subject,
            text: emailData.text,
        };

        await transporter.sendMail(mailOptions);
    }
}
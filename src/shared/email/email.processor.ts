import { Processor, Process } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { emailConfig } from './email.config';
import { EmailJobData } from './email.interface';

@Injectable()

export class EmailProcessor {
    private transporter
    constructor() {
        this.transporter = nodemailer.createTransport(emailConfig)
    }
    
    async sendEmail(emailData: EmailJobData) {
        const mailOptions = {
            from: `"Support Team"<${process.env.MAIL_FROM}>`,
            to: emailData.to,
            subject: emailData.subject,
            text: emailData.text,
        };

        await this.transporter.sendMail(mailOptions);
    }
}
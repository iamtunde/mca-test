import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Injectable } from '@nestjs/common';
import { EmailJobData } from './email.interface';

@Injectable()
export class EmailQueue {
  constructor(@InjectQueue('email') private readonly queue: Queue) {}

  async addEmailJob(emailData: EmailJobData) {
    await this.queue.add('send', emailData);
  }
}
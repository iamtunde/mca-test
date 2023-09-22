import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './user/user.module';
import { PolicyModule } from './policies/policy.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskService } from './task/task.service';
import { BullModule } from '@nestjs/bull';
import { EmailProcessor } from './shared/email/email.processor';
import { EmailQueue } from './shared/email/email.queue';
// import { SeederService } from './core/seeds/users.seeder';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      }
    }),
    BullModule.registerQueue({ name: 'email' }),
    DatabaseModule,
    UserModule,
    PolicyModule,
    PurchaseModule,
  ],
  providers: [EmailQueue, TaskService, EmailProcessor],
})

export class AppModule {}

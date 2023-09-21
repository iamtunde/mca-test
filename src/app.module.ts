import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './user/user.module';
import { PolicyModule } from './policies/policy.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    UserModule,
    PolicyModule,
    PurchaseModule
  ],
  controllers: [],
})
export class AppModule {}

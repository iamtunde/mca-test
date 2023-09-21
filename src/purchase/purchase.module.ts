import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { purchaseProvider } from './purchase.providers';

@Module({
  providers: [PurchaseService, ...purchaseProvider],
  exports: [PurchaseService]
})
export class PurchaseModule {}

import { Module } from '@nestjs/common';
import { bullProviders } from './bull.providers';

@Module({
    providers: [...bullProviders],
    exports: [...bullProviders]
})
export class BullConfigModule {}

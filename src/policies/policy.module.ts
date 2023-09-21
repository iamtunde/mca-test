import { Module } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { policyProviders } from './policy.providers';

@Module({
    providers: [PolicyService, ...policyProviders],
    exports: [PolicyService]
})
export class PolicyModule {}

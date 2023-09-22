import { Module } from '@nestjs/common';
import { SeedingService } from './seeding.service';
import { UserService } from 'src/user/user.service';
import { userProviders } from 'src/user/user.providers';
import { PolicyService } from 'src/policies/policy.service';
import { policyProviders } from 'src/policies/policy.providers';

@Module({
    providers: [SeedingService, UserService, ...userProviders, PolicyService, ...policyProviders],
    exports: [SeedingService]
})
export class SeedsModule {}

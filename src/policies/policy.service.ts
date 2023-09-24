import { Injectable, Inject } from '@nestjs/common';
import { POLICY_REPOSITORY } from 'src/core/constants';
import { PolicyDto } from './dto';
import { Policy } from './policy.entity';
import { DatabaseError } from 'sequelize';

@Injectable()
export class PolicyService {
    constructor(@Inject(POLICY_REPOSITORY) private readonly policyRepository: typeof Policy) {}

    async create(policy: PolicyDto) {
        try {
            const createdPolicy = await this.policyRepository.create<Policy>(policy)

            return createdPolicy
        } catch(error) {
            throw new DatabaseError(error)
        }
    }
}

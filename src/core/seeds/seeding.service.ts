import { Injectable, Inject } from "@nestjs/common";
import { User } from "src/user/user.model";
import { Policy } from "src/policies/policy.model";
import { userSeeds } from "./users.seed";
import { policySeeds } from "./policies.seed";
import { USER_REPOSITORY, POLICY_REPOSITORY } from "../constants";

@Injectable()
export class SeedingService {
    constructor(
        @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
        @Inject(POLICY_REPOSITORY) private readonly policyRepository: typeof Policy
    ) {}

    async seedUsers() {
        await this.userRepository.bulkCreate(userSeeds)
    }

    async seedPolicies() {
        await this.policyRepository.bulkCreate(policySeeds)
    }
}
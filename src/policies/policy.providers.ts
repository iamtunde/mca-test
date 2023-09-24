import { Policy } from "./policy.entity";
import { POLICY_REPOSITORY } from "src/core/constants";

export const policyProviders = [{
    provide: POLICY_REPOSITORY,
    useValue: Policy
}]
import { Policy } from "./policy.model";
import { POLICY_REPOSITORY } from "src/core/constants";

export const policyProviders = [{
    provide: POLICY_REPOSITORY,
    useValue: Policy
}]
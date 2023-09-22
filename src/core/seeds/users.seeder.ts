import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Model, ModelCtor } from "sequelize-typescript";
import { USER_REPOSITORY, POLICY_REPOSITORY } from "src/core/constants";
// import { userSeeds, policySeeds } from "./index";
// import { Policy } from "src/policies/policy.model";
import { User } from "src/user/user.model";
import { Seeder, DataFactory } from "nestjs-seeder";

@Injectable()
export class UsersSeeder {
    constructor(@InjectModel(User) private readonly user: ModelCtor<User>){}

    async seed(): Promise<any> {
        const users = DataFactory.createForClass(User).generate(10)

        return this.user.bulkCreate(users)
    }

    async drop(): Promise<any> {
        return this.user.truncate()
    }
}
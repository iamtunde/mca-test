import { Command } from "nestjs-command";
import { Injectable } from "@nestjs/common";
import { SeedingService } from "src/core/seeds/seeding.service";

@Injectable()
export class SeedCommand {
    constructor(private readonly seedingService: SeedingService) {}

    @Command({command: 'seed', describe: 'Seed the database'})
    async seed(){
        await this.seedingService.seedUsers()
        await this.seedingService.seedPolicies()
        
        console.log('Seeding complete')
    }
}
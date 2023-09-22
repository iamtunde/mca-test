import { BULL } from "../constants";
import { bullConfig } from "./bull.config";

export const bullProviders = [{
    provide: BULL,
    useFactory: async() => {
        return bullConfig
    }
}]
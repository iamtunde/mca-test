import { Purchase } from "./purchase.entity";
import { PURCHASE_REPOSITORY } from "src/core/constants";

export const purchaseProvider = [{
    provide: PURCHASE_REPOSITORY,
    useValue: Purchase
}]
import { Purchase } from "./purchase.model";
import { PURCHASE_REPOSITORY } from "src/core/constants";

export const purchaseProvider = [{
    provide: Purchase,
    useValue: PURCHASE_REPOSITORY
}]
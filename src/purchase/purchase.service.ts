import { Injectable, Inject } from '@nestjs/common';
import { PURCHASE_REPOSITORY } from 'src/core/constants';
import { Purchase } from './purchase.entity';
import { PurchaseDto } from './dto';
import { DatabaseError } from 'sequelize';
import { Op } from 'sequelize';

const moment = require('moment')
@Injectable()
export class PurchaseService {
    constructor(@Inject(PURCHASE_REPOSITORY) private readonly purchaseRepository: typeof Purchase) {}

    async create(purchase: PurchaseDto) {
        try {
            return await this.purchaseRepository.create<Purchase>(purchase)
        } catch(error) {
            throw new DatabaseError(error)
        }
    }

    async findCustomerLastPurchase(userId: number) {
        try {
            return await this.purchaseRepository.findOne<Purchase>({
                where: {
                    userId,
                    createdAt: {
                        [Op.gte]: moment().subtract(7, 'days').toDate()
                    }
                }
            })
        } catch(error) {
            throw new DatabaseError(error)
        }
    }
}

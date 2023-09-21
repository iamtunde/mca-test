import { Table, Model, Column, DataType, HasMany, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { Purchase } from "src/purchase/purchase.model";

@Table

export class Policy extends Model<Policy>{
    @HasMany(() => Purchase, 'policyId')
    purchases: Purchase[]

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id?: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    type: string

    @Column({
        type: DataType.DOUBLE,
        unique: true,
        allowNull: false
    })
    price: number

    @Column({
        type: DataType.ENUM,
        values: ['active', 'in_active'],
        defaultValue: 'active',
        allowNull: false
    })
    status: string

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date
}
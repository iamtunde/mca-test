import { Table, Model, Column, DataType, CreatedAt, UpdatedAt, HasMany } from "sequelize-typescript";
import { Purchase } from "src/purchase/purchase.entity";
@Table({ tableName: 'policies' })

export class Policy extends Model<Policy>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

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
        type: DataType.TEXT,
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

    @HasMany(() => Purchase, 'policyId')
    purchases: Purchase[]
}
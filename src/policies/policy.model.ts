import { Table, Model, Column, DataType, CreatedAt, UpdatedAt, HasMany } from "sequelize-typescript";
import { Purchase } from "src/purchase/purchase.model";
@Table

export class Policy extends Model<Policy>{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string

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

    @HasMany(() => Purchase, 'id')
    purchases: Purchase[]
}
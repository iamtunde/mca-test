import { Table, Model, Column, DataType, HasMany, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { Purchase } from "src/purchase/purchase.model";

@Table

export class User extends Model<User>{
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
    firstName: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastName: string

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    password: string

    @Column({
        type: DataType.ENUM,
        values: ['admin', 'customer', 'distributor', 'provider'],
        defaultValue: 'customer',
        allowNull: false
    })
    role: string

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date

    @HasMany(() => Purchase)
    purchases: Purchase[]
}
import { Table, Column, DataType, Model, ForeignKey, CreatedAt, UpdatedAt, BelongsTo } from "sequelize-typescript";
import { Policy } from "src/policies/policy.model";
import { User } from "src/user/user.model";

@Table
export class Purchase extends Model<Purchase>{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    id?: any

    @ForeignKey(() => User)
    userId: any

    @ForeignKey(() => Policy)
    policyId: any

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    reference: string

    @Column({
        type: DataType.ENUM,
        values: ['successful', 'failed'],
        allowNull: false,
        defaultValue: 'successful'
    })
    status: string

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date

    @BelongsTo(() => User)
    user: User[]

    @BelongsTo(() => Policy)
    policy: Policy[]
}
import { Table, Column, DataType, Model, ForeignKey, CreatedAt, UpdatedAt, BelongsTo } from "sequelize-typescript";
import { Policy } from "src/policies/policy.entity";
import { User } from "src/user/user.entity";

@Table({ tableName: 'purchases' })
export class Purchase extends Model<Purchase>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

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
        values: ['failed', 'pending', 'successful'],
        allowNull: false,
        defaultValue: 'pending'
    })
    status: string

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date

    @BelongsTo(() => User, 'userId')
    user: User

    @BelongsTo(() => Policy, 'policyId')
    policy: Policy
}
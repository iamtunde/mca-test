import { UUID } from "sequelize";
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

   /*  @ForeignKey(() => User)
    @Column({
        type: DataType.UUID
    })
    userId: string */
    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID
    })
    userId: string

    @BelongsTo(() => User, {
        foreignKey: 'userId',
        constraints: false
    })
    user: User

    /* @ForeignKey(() => Policy)
    @Column({
        type: DataType.UUID
    })
    policyId: string */

   /*  @BelongsTo(() => Policy, {
        foreignKey: 'policyId',
        constraints: false 
    })
    policyId: Policy
 */
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
}
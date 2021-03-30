import { Column, Model, Table, AutoIncrement, PrimaryKey, Unique } from 'sequelize-typescript';

@Table
export class Transaction extends Model<Transaction> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @Column
    reference: string;

    @Column
    amount: number;

    @Column
    account: string;
}
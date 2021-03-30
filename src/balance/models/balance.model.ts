import { Column, Model, Table, AutoIncrement, PrimaryKey, Unique, IsUUID } from 'sequelize-typescript';

@Table
export class Balance extends Model<Balance> {
    @Unique(true)
    @Column
    account: string;

    @Column
    balance: number;
    
}
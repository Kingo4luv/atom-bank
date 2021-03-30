import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Transaction } from './models/transaction.model';

@Injectable()
export class TransactionService {
    constructor(
        @InjectModel(Transaction)
        private transactionModel: typeof Transaction,
    ) { }

    async findAll(): Promise<Transaction[]> {
        return this.transactionModel.findAll();
    }

    async findOne(account: string): Promise<Transaction> {
        return this.transactionModel.findOne({
            where: {
                account
            },
        });
    }

    async findLatest(account: string): Promise<Transaction>{
        try {
            return this.transactionModel.findOne({
                where: {
                    account,
                    createdAt: {
                        [Op.gt]: new Date(Date.now() - (30 * 1000)),
                    },
                },
                order: [['createdAt', 'DESC']]
            });
        } catch (error) {
            throw new InternalServerErrorException("Server error");
        }
    }

    async create(data): Promise<Transaction> {
        return this.transactionModel.create(data);
    }

   
}

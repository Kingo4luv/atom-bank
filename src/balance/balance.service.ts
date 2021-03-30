import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { BalanceDto } from './create-balance.dto';
import { Balance } from './models/balance.model';

@Injectable()
export class BalanceService {
    constructor(
        @InjectModel(Balance)
        private balanceModel: typeof Balance,
        private sequelize: Sequelize
    ) { }

    async findAll(): Promise<Balance[]> {
        return this.balanceModel.findAll();
    }

    async findOne(account: string): Promise<Balance> {
        const balance = await this.balanceModel.findOne({
            where: {
                account
            },
        });
        if(!balance){
            throw new NotFoundException("Balance not found")
        }

        return balance;
    }

    async create(data): Promise<Balance> {
        return this.balanceModel.create(data);
    }


}

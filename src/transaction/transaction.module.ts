import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './models/transaction.model';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Module({
    imports: [SequelizeModule.forFeature([Transaction])],
    providers: [TransactionService],
    controllers: [TransactionController],
    exports: [SequelizeModule, TransactionService]
})
export class TransactionModule {}


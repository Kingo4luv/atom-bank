import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TransactionModule } from 'src/transaction/transaction.module';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';
import { Balance } from './models/balance.model';

@Module({
    imports: [SequelizeModule.forFeature([Balance]), TransactionModule],
    providers: [BalanceService],
    controllers: [BalanceController],
    exports: [SequelizeModule]
})
export class BalanceModule {}

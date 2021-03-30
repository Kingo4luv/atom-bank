import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalanceController } from './balance/balance.controller';
import { BalanceModule } from './balance/balance.module';
import { BalanceService } from './balance/balance.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionService } from './transaction/transaction.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TransactionModule,
    BalanceModule,
    SequelizeModule.forRoot({
      dialect:"postgres",
      host: process.env.DB_HOST,
      port: 5433,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [],
      autoLoadModels: true,
      synchronize: true
    }),
  ],
  controllers: [AppController, BalanceController, TransactionController],
  providers: [AppService, BalanceService, TransactionService],
})
export class AppModule {}

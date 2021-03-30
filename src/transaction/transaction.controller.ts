import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Transaction } from './models/transaction.model';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
    constructor(
        private transactionService: TransactionService,
       
    ) { }
    @Get()
    @ApiResponse({ status: 200, description: "Get all Transactions" })
    async all(): Promise<Transaction[]> {
        return this.transactionService.findAll();
    }
}

import { BadRequestException, Body, Controller, Get, HttpException, InternalServerErrorException, NotFoundException, Param, Post, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { generateReference } from 'src/helper';
import { TransactionService } from '../transaction/transaction.service';
import { BalanceDto } from './create-balance.dto';
import { BalanceService } from './balance.service';
import { Balance } from './models/balance.model';
import { TransferDto } from './transfer.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';


@Controller('balance')
export class BalanceController {
    constructor(
        private balanceService: BalanceService,
        private transactionService: TransactionService,
        private sequelize: Sequelize

    ) { }
    @Post('create')
    @ApiBody({ type: BalanceDto })
    @ApiResponse({ status: 201, description: "Create new account/balance" })
    async create(@Body() body: BalanceDto) {
        return this.balanceService.create(body);
    }

    @Post('transfer')
    @ApiBody({type: TransferDto})
    @ApiResponse({ status: 201, description: "Transfer balance" })
    @ApiResponse({ status: 404, description: "Invalid Account" })
    @ApiResponse({ status: 403, description: "Insufficient fund" })
    @ApiResponse({ status: 500, description: "Server Error" })
    async transfer(@Body() transferDto: TransferDto){
        const reference = generateReference();
        if (transferDto.to === transferDto.from) {
            throw new BadRequestException("You can't transfer money to your self")
        }
        const hasLatestTransaction = await this.transactionService.findLatest(transferDto.from);
        if (hasLatestTransaction){
            throw new BadRequestException("You have to wait for 30 seconds to do a new transaction")
        }
        try {
            await this.sequelize.transaction(async t => {
                const fromBalance = await Balance.findOne({ where: { account: transferDto.from }, lock: true, transaction: t });
                const toBalance = await Balance.findOne({ where: { account: transferDto.to }, lock: true, transaction: t });

                if (!fromBalance) {
                    throw new NotFoundException("Invalid senders account")
                }
                if (!toBalance) {
                    throw new NotFoundException("Invalid Recipient Account")
                }

                if (fromBalance.balance < transferDto.amount) {
                    throw new UnauthorizedException("Insufficient Fund")
                }
                toBalance.balance += transferDto.amount;
                fromBalance.balance -= transferDto.amount;
                Promise.all([
                    fromBalance.save(),
                    toBalance.save(),
                    this.transactionService.create({ reference, amount: transferDto.amount, account: transferDto.from })
                ])
            });
            return { message: "Transfer Successful" };
        } catch (error) {
            if (error.response){
                throw new HttpException({
                    status: error.response.statusCode,
                    message: error.response.message,
                    error: error.response.message,
                }, error.response.statusCode);
            }
            throw new InternalServerErrorException("Server error");
        }

    }

    @Get()
    @ApiResponse({status: 200, description:"Get all balances"})
    async all(): Promise<Balance[]> {
        return this.balanceService.findAll();
    }

    @Get(':account')
    @ApiResponse({ status: 200, description: "Get single account all balance" })
    @ApiResponse({ status: 404, description: "Balance not found" })
    async singleAccount(@Param('account') account: string): Promise<Balance> {
        return this.balanceService.findOne(account);
    }
}

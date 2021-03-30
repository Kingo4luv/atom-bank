import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, MaxLength, MinLength, Min } from 'class-validator';
export class BalanceDto {
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty({ type: String, description: "New Account" })
    account: string;

    @IsNotEmpty()
    @IsInt()
    @Min(100)
    @ApiProperty({ type: Number, description: "Balance" })
    balance: Number;

}
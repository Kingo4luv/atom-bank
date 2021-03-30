import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, MaxLength, MinLength, Min } from 'class-validator';
export class TransferDto {
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty({type: String, description:"Recipient Account"})
    to: string;

    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty({ type: String, description: "Sender Account" })
    from: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @ApiProperty({ type: Number, description: "Transfer Amount" })
    amount: number;

}
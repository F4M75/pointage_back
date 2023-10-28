import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CheckDto {
  @IsString()
  @ApiProperty({
    description: 'Identifiant of the worker',
    type: String,
  })
  idWorker: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'A simple commend, can be null',
    type: String,
  })
  comments: string;
}

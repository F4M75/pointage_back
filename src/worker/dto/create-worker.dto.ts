import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateWorkerDto {
  @IsString()
  @Length(4)
  @ApiProperty()
  name: string;

  @IsString()
  @Length(4)
  @ApiProperty()
  firstName: string;

  @IsString()
  @Length(4)
  @ApiProperty()
  departement: string;
}

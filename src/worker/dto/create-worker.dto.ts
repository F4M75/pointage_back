import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateWorkerDto {
  @IsString()
  @Length(4)
  @ApiProperty({
    description: 'Name of the worker',
    type: String,
  })
  name: string;

  @IsString()
  @Length(4)
  @ApiProperty({
    description: 'First name of the worker',
    type: String,
  })
  firstName: string;

  @IsString()
  @Length(4)
  @ApiProperty({
    description: 'Departement where the worker work',
    type: String,
  })
  departement: string;
}

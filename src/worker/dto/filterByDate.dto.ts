import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FilterByDateDto {
  @IsString()
  @ApiProperty({
    description: 'A date with a format yyyy-mm-dd',
    type: String,
  })
  date_creation: string;
}

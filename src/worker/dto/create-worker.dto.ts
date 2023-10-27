import { IsString, Length } from 'class-validator';

export class CreateWorkerDto {
  @IsString()
  @Length(4)
  name: string;

  @IsString()
  @Length(4)
  firstName: string;

  @IsString()
  @Length(4)
  departement: string;
}

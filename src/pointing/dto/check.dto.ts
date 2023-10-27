import { IsOptional, IsString } from 'class-validator';

export class CheckDto {
  @IsString()
  idWorker: string;

  @IsString()
  @IsOptional()
  comments: string;
}

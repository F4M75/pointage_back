import { Controller, Get, Post, Body } from '@nestjs/common';
import { PointingService } from './pointing.service';
import { CheckDto } from './dto/check.dto';

@Controller('pointing')
export class PointingController {
  constructor(private readonly pointingService: PointingService) {}

  @Post('/check_in')
  checkIn(@Body() checkDto: CheckDto) {
    return this.pointingService.checkIn(checkDto);
  }

  @Post('/check_out')
  checkOut(@Body() checkDto: CheckDto) {
    return this.pointingService.checkOut(checkDto);
  }

  @Get()
  findAll() {
    return this.pointingService.findAll();
  }
}

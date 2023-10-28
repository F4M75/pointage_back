import { Controller, Get, Post, Body } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { FilterByDateDto } from './dto/filterByDate.dto';

@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @Post()
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workerService.create(createWorkerDto);
  }

  @Get()
  findAll() {
    return this.workerService.findAll();
  }

  @Post('/by_date')
  findByDate(@Body() filterByDateDto: FilterByDateDto) {
    return this.workerService.findByDate(filterByDateDto);
  }
}

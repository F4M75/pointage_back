import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerSchema, Worker } from './worker.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Worker.name, schema: WorkerSchema }]),
  ],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}

import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Worker } from './worker.schema';

@Injectable()
export class WorkerService {
  constructor(@InjectModel(Worker.name) private workerModel: Model<Worker>) {}

  create(createWorkerDto: CreateWorkerDto): Promise<Worker> {
    const createdWorker = new this.workerModel(createWorkerDto);

    return createdWorker.save();
  }

  findAll(): Promise<Worker[]> {
    return this.workerModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} worker`;
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}

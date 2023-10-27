import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
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

  findByDate(date_creation: string) {
    /*
     ** here I just set the time to 00:00 and get the next day so the date will be between them
     */
    const formatedDate = new Date(date_creation);

    /* Set the time to midnight UTC for the given date */
    formatedDate.setUTCHours(0, 0, 0, 0);

    const nextDay = new Date(formatedDate);
    /* Get the date for the next day */
    nextDay.setUTCDate(nextDay.getUTCDate() + 1);

    return this.workerModel.find({
      createdAt: {
        $gte: formatedDate,
        $lt: nextDay,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CheckDto } from './dto/check.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pointing } from './pointing.schema';

@Injectable()
export class PointingService {
  constructor(
    @InjectModel(Pointing.name) private pointingModel: Model<Pointing>,
  ) {}

  checkIn(checkDto: CheckDto): Promise<Pointing> {
    const checkPointing = new this.pointingModel({
      idWorkers: checkDto.idWorker,
      checkIn: new Date(),
      comment: checkDto.comments,
    });

    return checkPointing.save();
  }

  async checkOut(checkDto: CheckDto): Promise<Pointing> {
    /*
     ** here I just set the time to 00:00 and get the next day so the date will be between them
     */
    const formatedDate = new Date();

    /* Set the time to midnight UTC for the given date */
    formatedDate.setUTCHours(0, 0, 0, 0);

    const nextDay = new Date(formatedDate);
    /* Get the date for the next day */
    nextDay.setUTCDate(nextDay.getUTCDate() + 1);

    const worker = await this.pointingModel.findOne({
      idWorkers: checkDto.idWorker,
      checkIn: {
        $gte: formatedDate,
        $lt: nextDay,
      },
    });

    const secondJob = new Date().getTime() - worker.checkIn.getTime();

    const hourJob = secondJob / (1000 * 3600);
    await this.pointingModel.updateOne(
      {
        idWorkers: checkDto.idWorker,
        checkIn: {
          $gte: formatedDate,
          $lt: nextDay,
        },
      },
      {
        checkOut: new Date(),
        comments: checkDto.comments,
        hourJob: String(hourJob),
      },
      { new: true },
    );

    return worker;
  }

  findAll(): Promise<Pointing[]> {
    return this.pointingModel.find().exec();
  }
}

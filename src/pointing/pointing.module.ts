import { Module } from '@nestjs/common';
import { PointingService } from './pointing.service';
import { PointingController } from './pointing.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pointing, PointingSchema } from './pointing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pointing.name, schema: PointingSchema },
    ]),
  ],
  controllers: [PointingController],
  providers: [PointingService],
})
export class PointingModule {}

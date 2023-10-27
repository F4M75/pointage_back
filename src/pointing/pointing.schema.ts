import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Worker } from 'src/worker/worker.schema';

export type PointingDocument = HydratedDocument<Pointing>;

/* here we define the mongodb schema which is a map of the database collection */
@Schema({ timestamps: true })
export class Pointing {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' })
  idWorkers: Worker;

  @Prop()
  checkIn: Date;

  @Prop()
  checkOut: Date;

  @Prop({ nullable: true })
  comments: string;

  @Prop({ nullable: true })
  hourJob: string;
}

export const PointingSchema = SchemaFactory.createForClass(Pointing);

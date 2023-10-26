import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WorkerDocument = HydratedDocument<Worker>;

/* here we define the mongodb schema which is a map of the database collection */
@Schema({ timestamps: true })
export class Worker {
  @Prop()
  name: string;

  @Prop()
  firstName: string;

  @Prop()
  departement: string;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);

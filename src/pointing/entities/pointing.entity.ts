import { Workers } from 'src/worker/entities/worker.entity';

export class Pointing {
  id: string;
  idWorkers: Workers;
  checkIn: Date;
  checkOut: Date | null;
  comments: string;
  hourJob: string | null;
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { WorkerModule } from './worker/worker.module';
import { PointingModule } from './pointing/pointing.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    WorkerModule,
    PointingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

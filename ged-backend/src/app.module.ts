import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackingModule } from './tracking/tracking.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TrackingModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

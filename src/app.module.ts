import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MruModule } from './mru/mru.module';
import { MruvModule } from './mruv/mruv.module';

@Module({
  imports: [MruModule, MruvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

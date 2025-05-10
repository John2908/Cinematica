import { Module } from '@nestjs/common';
import { MruController } from './mru.controller';
import { MruService } from './mru.service';

@Module({
  controllers: [MruController],
  providers: [MruService],
})
export class MruModule {}



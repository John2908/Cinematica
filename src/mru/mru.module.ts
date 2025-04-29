import { Module } from '@nestjs/common';
import { MruService } from './mru.service';
import { MruController } from './mru.controller';

@Module({
  controllers: [MruController],
  providers: [MruService],
})
export class MruModule {}

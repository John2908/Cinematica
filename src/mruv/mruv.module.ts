import { Module } from '@nestjs/common';
import { MruvController } from './mruv.controller';
import { MruvService } from './mruv.service';

@Module({
  controllers: [MruvController],
  providers: [MruvService],
})
export class MruvModule {}

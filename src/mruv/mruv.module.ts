import { Module } from '@nestjs/common';
import { MruvService } from './mruv.service';
import { MruvController } from './mruv.controller';

@Module({
  controllers: [MruvController],
  providers: [MruvService],
})
export class MruvModule {}

import { Module } from '@nestjs/common';
import { McuService } from './mcu.service';
import { McuController } from './mcu.controller';

@Module({
  controllers: [McuController],
  providers: [McuService],
})
export class McuModule {}

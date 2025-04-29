import { Controller } from '@nestjs/common';
import { McuService } from './mcu.service';

@Controller('mcu')
export class McuController {
  constructor(private readonly mcuService: McuService) {}
}

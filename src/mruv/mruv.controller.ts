import { Controller } from '@nestjs/common';
import { MruvService } from './mruv.service';

@Controller('mruv')
export class MruvController {
  constructor(private readonly mruvService: MruvService) {}
}

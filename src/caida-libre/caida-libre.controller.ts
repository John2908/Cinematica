import { Controller } from '@nestjs/common';
import { CaidaLibreService } from './caida-libre.service';

@Controller('caida-libre')
export class CaidaLibreController {
  constructor(private readonly caidaLibreService: CaidaLibreService) {}
}

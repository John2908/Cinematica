import { Controller, Post, Body } from '@nestjs/common';
import { MruService } from './mru.service';
import { MRUDto } from './dto/Mru.dto';

@Controller('mru')
export class MruController {
  constructor(private readonly mruService: MruService) {}

  @Post('calcular')
  calcularMRU(@Body() mruDto: MRUDto) {
    return this.mruService.calcular(mruDto);
  }
}

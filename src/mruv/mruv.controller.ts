import { Controller, Post, Body } from '@nestjs/common';
import { MruvService } from './mruv.service';
import { MRUVDto } from './dto/mruv.dto';

@Controller('mruv')
export class MruvController {
  constructor(private readonly mruvService: MruvService) {}

  @Post('calcular')
  calcularMRUV(@Body() dto: MRUVDto) {
    return this.mruvService.calcular(dto);
  }
}


import { Body, Controller, Post } from '@nestjs/common';
import { MruService } from './mru.service';
import { MruDto } from './dto/Mru.dto';
import { MruModel } from './dto/Mru.model';

@Controller('mru')
export class MruController {
  constructor(private readonly mruService: MruService) {}

  @Post()
  calcular(@Body() datos: MruDto): MruModel {
    return this.mruService.calcular(datos);
  }
}

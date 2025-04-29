import { Controller } from '@nestjs/common';
import { MovimientoproyectilesService } from './movimientoproyectiles.service';

@Controller('movimientoproyectiles')
export class MovimientoproyectilesController {
  constructor(private readonly movimientoproyectilesService: MovimientoproyectilesService) {}
}

import { Module } from '@nestjs/common';
import { MovimientoproyectilesService } from './movimientoproyectiles.service';
import { MovimientoproyectilesController } from './movimientoproyectiles.controller';

@Module({
  controllers: [MovimientoproyectilesController],
  providers: [MovimientoproyectilesService],
})
export class MovimientoproyectilesModule {}

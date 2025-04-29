import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MruModule } from './mru/mru.module';
import { MruvModule } from './mruv/mruv.module';
import { CaidaLibreModule } from './caida-libre/caida-libre.module';
import { McuModule } from './mcu/mcu.module';
import { MovimientoproyectilesModule } from './movimientoproyectiles/movimientoproyectiles.module';

@Module({
  imports: [MruModule, MruvModule, CaidaLibreModule, McuModule, MovimientoproyectilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CaidaLibreService } from './caida-libre.service';
import { CaidaLibreController } from './caida-libre.controller';

@Module({
  controllers: [CaidaLibreController],
  providers: [CaidaLibreService],
})
export class CaidaLibreModule {}

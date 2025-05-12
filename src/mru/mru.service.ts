import { Injectable, BadRequestException } from '@nestjs/common';
import { MRUDto, CalculoMRU } from './dto/Mru.dto';

@Injectable()
export class MruService {
  calcular(dto: MRUDto) {
    const { tipoCalculo } = dto;

    switch (tipoCalculo) {
      case CalculoMRU.VELOCIDAD:
        if (dto.distanciaFinal == null || dto.distanciaInicial == null || dto.tiempoFinal == null || dto.tiempoInicial == null) {
          throw new BadRequestException('Faltan datos para calcular la velocidad.');
        }
        const Dist = dto.distanciaFinal - dto.distanciaInicial;
        const Time = dto.tiempoFinal - dto.tiempoInicial;
        if (Time === 0) {
          throw new BadRequestException('El tiempo no puede ser cero.');
        }
        return { resultado: Dist / Time, unidad: 'm/s' };

      case CalculoMRU.POSICION_FINAL:
        if (dto.posicionInicial == null || dto.velocidad == null || dto.tiempoFinal == null || dto.tiempoInicial == null) {
          throw new BadRequestException('Faltan datos para calcular la posición final.');
        }
        const tiempoTranscurrido = dto.tiempoFinal - dto.tiempoInicial;
        return { resultado: dto.posicionInicial + dto.velocidad * tiempoTranscurrido, unidad: 'm' };

      case CalculoMRU.TIEMPO:
        if (dto.distanciaFinal == null || dto.distanciaInicial == null || dto.velocidad == null) {
          throw new BadRequestException('Faltan datos para calcular el tiempo.');
        }
        const distancia = dto.distanciaFinal - dto.distanciaInicial;
        if (dto.velocidad === 0) {
          throw new BadRequestException('La velocidad no puede ser cero.');
        }
        return { resultado: distancia / dto.velocidad, unidad: 's' };

      default:
        throw new BadRequestException('Tipo de cálculo no válido.');
    }
  }
}

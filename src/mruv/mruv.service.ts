import { Injectable, BadRequestException } from '@nestjs/common';
import { MRUVDto, CalculoMRUV } from './dto/mruv.dto'; 

@Injectable()
export class MruvService {
  calcular(dto: MRUVDto) {
    const {
      posicionInicial,
      velocidadInicial,
      velocidadFinal,
      tiempoInicial,
      tiempoFinal,
      aceleracionInicial,
      tipoCalculo,
    } = dto;

    const t = (tiempoFinal ?? 0) - (tiempoInicial ?? 0);
    const a = aceleracionInicial ?? 0;

    let resultado: number;
    let unidad: string;

    switch (tipoCalculo) {
      case CalculoMRUV.POSICION_FINAL:
        if (posicionInicial == null || velocidadInicial == null || tiempoFinal == null || aceleracionInicial == null)
          throw new BadRequestException('Faltan datos para calcular la posición final.');
        resultado = posicionInicial + velocidadInicial * t + 0.5 * a * t * t;
        unidad = 'm';
        break;

      case CalculoMRUV.VELOCIDAD_FINAL: 
        if (velocidadInicial == null || aceleracionInicial == null || tiempoFinal == null || tiempoInicial == null)
          throw new BadRequestException('Faltan datos para calcular la velocidad final.');
        resultado = velocidadInicial + a * t;
        unidad = 'm/s';
        break;

      case CalculoMRUV.TIEMPO: 
        if (velocidadInicial == null || velocidadFinal == null || aceleracionInicial == null)
          throw new BadRequestException('Faltan datos para calcular el tiempo.');
        resultado = (velocidadFinal - velocidadInicial) / a;
        unidad = 's';
        break;

      case CalculoMRUV.ACELERACION: 
        if (velocidadInicial == null || velocidadFinal == null || tiempoFinal == null || tiempoInicial == null)
          throw new BadRequestException('Faltan datos para calcular la aceleración.');
        resultado = (velocidadFinal - velocidadInicial) / t;
        unidad = 'm/s²';
        break;

      default:
        throw new BadRequestException('Tipo de cálculo no válido.');
    }

    return {
      resultado,
      unidad,
    };
  }
}



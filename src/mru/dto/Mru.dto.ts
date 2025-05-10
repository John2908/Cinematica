import { IsNumber, IsOptional, IsEnum, Min } from 'class-validator';

export enum CalculoMRU {
  VELOCIDAD = 'velocidad',
  POSICION_FINAL = 'posicion_final',
  TIEMPO = 'tiempo',
}

export class MRUDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  velocidad?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  distanciaInicial?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  distanciaFinal?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  tiempoInicial?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  tiempoFinal?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  posicionInicial?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  posicionFinal?: number;

  @IsEnum(MRUDto)
  tipoCalculo: CalculoMRU;
}


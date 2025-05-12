import { IsNumber, IsOptional, IsString, IsEnum } from "class-validator";

export enum CalculoMRUV {
  POSICION_FINAL = 'posicionFinal',
  VELOCIDAD_FINAL = 'velocidadFinal',
  TIEMPO = 'tiempo',
  ACELERACION = 'aceleracion',
}

export class MRUVDto {
  @IsOptional()
  @IsNumber()
  posicionInicial?: number;

  @IsOptional()
  @IsNumber()
  posicionFinal?: number;

  @IsOptional()
  @IsNumber()
  velocidadInicial?: number;

  @IsOptional()
  @IsNumber()
  velocidadFinal?: number;

  @IsOptional()
  @IsNumber()
  tiempoInicial?: number;

  @IsOptional()
  @IsNumber()
  tiempoFinal?: number;

  @IsOptional()
  @IsNumber()
  aceleracionInicial?: number;

  @IsOptional()
  @IsNumber()
  aceleracionFinal?: number;

  @IsEnum(CalculoMRUV, {
    message: 'Tipo de cálculo no válido. Opciones válidas: posicionFinal, velocidadFinal, tiempo, aceleracion',
  })
  tipoCalculo: CalculoMRUV;
}

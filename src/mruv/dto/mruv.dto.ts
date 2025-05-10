import { IsNumber, IsOptional, IsString, IsEnum } from "class-validator";

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

  @IsString()
  @IsEnum(['posicionFinal', 'velocidadFinal', 'tiempo', 'aceleracion'], {
    message: 'Tipo de cálculo no válido.',
  })
  tipoCalculo: 'posicionFinal' | 'velocidadFinal' | 'tiempo' | 'aceleracion';
}

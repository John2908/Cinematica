import { BadRequestException, Injectable } from '@nestjs/common';
import { MruDto } from './dto/Mru.dto';
import { MruModel } from './dto/Mru.model';

@Injectable()
export class MruService {
    calcular(datos: MruDto): MruModel {
        let { PosicionInicial, PosicionFinal, Velocidad, Tiempo } = datos;

        //convertidor de undefined a null 
        let x0 = PosicionInicial ?? null;
        let x = PosicionFinal ?? null;
        let v = Velocidad ?? null;
        let t = Tiempo ?? null;
        
        //caculador de datos
        if (x0 !==null && v !==null && t !==null && x ===null) {
            x = x0 + v * t;
        } else if (x0 !==null && x !==null && t !==null && v ===null) {
            v = (x - x0) / t;
        } else if (x0 !==null && x !==null && v !==null && t ===null) {
            t = (x - x0) / v;
        } else if (x !==null && v !==null && t !==null && x0 === null){
            x0 = x - v * t;
        } else {
            throw new BadRequestException('Los datos son insuficientes para poder calcular')
        }

        return new MruModel({
            PosicionInicial: x0 ?? PosicionInicial ?? 0,
            PosicionFinal: x ?? 0,
            Velocidad: v ?? 0,
            Tiempo: t ?? 0,
        });
    }
}

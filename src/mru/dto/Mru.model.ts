export class MruModel {
    PosicionInicial: number;
    PosicionFinal: number;
    Velocidad: number;
    Tiempo: number;

    constructor(data: Partial <MruModel>) {
        this.PosicionInicial = data.PosicionInicial ?? 0;
        this.PosicionFinal = data.PosicionFinal ?? 0;
        this.Velocidad = data.Velocidad ?? 0;
        this.Tiempo = data.Tiempo ?? 0;
    }
}

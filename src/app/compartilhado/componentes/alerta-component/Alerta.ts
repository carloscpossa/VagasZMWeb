export class Alerta {
    type: TipoAlerta;
    message: string;
}

export enum TipoAlerta {
    Success,
    Error,
    Info,
    Warning
}
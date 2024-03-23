export interface ITransacciones extends Document {
    ID_Cuenta: number;
    Fecha: Date;
    Monto: number;
}

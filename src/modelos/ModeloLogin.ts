export interface tokenSesion{
    MiTocken:string,
    usuario:string,
    valides:boolean,
    expiracion:Date,
    accesos: Accesos[]
}

export enum Accesos{
   CREA, LEER,ACTUALIZAR, BORRAR 
}
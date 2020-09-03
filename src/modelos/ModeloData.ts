export interface Usuarios{
    id: string,
    nombre: string,
    edad: number,
    email:string,
    cargo: Cargo
}

export enum Cargo{
    CLIENTE
}
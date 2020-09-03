import { Usuarios } from "../modelos/ModeloData";

const baseUrl = 'http://localhost:8080/';
const urlUsuario = baseUrl+'usuario';
export class ServicioLeer{

    public async obtenerUsuario(autentificacion: string,query:string): Promise<Usuarios[]>{
        const url = urlUsuario+'?email='+query;
        const opciones={
            method:'GET',
            headers:{
                Authorization:autentificacion
            }

        }
        const resultado = await fetch(url,opciones);
        const resultadoJson= await resultado.json();
        return resultadoJson;

    }

    public async borrarUsuario(autentificacion:string , usuario: Usuarios):Promise<void>{
        const url = urlUsuario+'?id='+usuario.id;
        const opciones={
            method:'DELETE',
            headers:{
                Authorization:autentificacion
            }

        }
         await fetch(url,opciones);
    }

}
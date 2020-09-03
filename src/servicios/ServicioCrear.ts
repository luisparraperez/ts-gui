import { Usuarios } from "../modelos/ModeloData";

const baseUrl = 'http://localhost:8080/';
const urlUsuario = baseUrl+'usuario';
export class ServicioCrear{
 public async crearUsuario(autorizacion:string, array:Object ):Promise<boolean>{
    const opciones = {
        method:'PUT',
        headers:{
            Authorization:autorizacion,
            'Content-Type':'application/json'
        },
        body: JSON.stringify(array)
    }
    const resultado = await fetch(urlUsuario,opciones);
    return resultado.status==201;
 }

 public async actualizaUsuario(autentificacion:string , usuario: Usuarios,parametros:Object):Promise<boolean>{
    const url = urlUsuario+'?id='+usuario.id;
    const opciones={
        method:'POST',
        headers:{
            Authorization:autentificacion,
            'Content-Type':'application/json'
        },
        body: JSON.stringify(parametros)

    }
     const resultado =await fetch(url,opciones);
     return resultado.status==200;
}


}
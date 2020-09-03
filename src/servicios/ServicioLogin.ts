import { tokenSesion } from "../modelos/ModeloLogin";
const baseUrl = 'http://localhost:8080/';
const urlLogin = baseUrl+'login';
export class ServicioLogin{

    public async login(usuario:string, clave:string): Promise<tokenSesion | undefined>{
        const opciones = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({usuario:usuario,clave:clave})
        }
        const resultado = await fetch(urlLogin,opciones);
        if (resultado.status==201){
                return await  resultado.json();
        }
        else{
                return undefined;
        }
    }


  
}
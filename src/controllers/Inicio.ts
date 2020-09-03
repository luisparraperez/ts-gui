import { Base } from "./Base";
import { tokenSesion, Accesos } from "../modelos/ModeloLogin";
import { ServicioLeer } from "../servicios/ServicioLeer";
import { ServicioCrear } from "../servicios/ServicioCrear";

import { Usuarios } from "../modelos/ModeloData";

export class Inicio extends Base{
    private tokenSesion: tokenSesion | undefined;
    private inputBusqueda: HTMLInputElement | undefined;
    private inputEdad: HTMLInputElement | undefined;
    private inputEmail: HTMLInputElement | undefined;
    private inputCargo: HTMLInputElement | undefined;
    private inputNombre: HTMLInputElement | undefined;
    private resultadoBusqueda: HTMLDivElement | undefined;
    private servicioLeer: ServicioLeer= new ServicioLeer();
    private ServicioCrear: ServicioCrear = new ServicioCrear();
    private usuarioSeleccionado: Usuarios | undefined;

    private labelSeleccionado : HTMLLabelElement | undefined;


    public setTokenSesion(tokenSesion:tokenSesion){
        this.tokenSesion=tokenSesion;
    }

public crearVista() :HTMLDivElement{
    const titulo = this.createElement('h2','Hola mundo');
    if(this.tokenSesion){
        this.createElement('label','Bienvenido '+this.tokenSesion.usuario);
        this.crearBreak();
        this.generarBotones();
    }
    else{
        this.createElement('label','vaya al login')

    }
   return this.contenedor;
}

private generarBotones(){
    if (this.tokenSesion){
        for (const accesos of this.tokenSesion.accesos){
            this.createElement('button',Accesos[accesos], async ()=>{
                    await this.accionesBotones(accesos);
            });
        }
        if(this.tokenSesion.accesos.includes(Accesos.LEER)){
            this.crearBreak();
            this.createElement('label','Buscar:');
            this.inputBusqueda= this.createElement('input');
            this.resultadoBusqueda=this.createElement('div');
        }

        if(this.tokenSesion.accesos.includes(Accesos.CREA)||this.tokenSesion.accesos.includes(Accesos.ACTUALIZAR) ){
            this.crearBreak();
            this.createElement('h2','Formulario')
            this.crearBreak();
            this.createElement('label','Edad:');
            this.inputEdad= this.createElement('input');
            this.crearBreak();
            this.createElement('label','Email:');
            this.inputEmail= this.createElement('input');
            this.crearBreak();
            this.createElement('label','Nombre:');
            this.inputNombre= this.createElement('input');
            this.crearBreak();
            this.createElement('label','Cargo:');
            this.inputCargo= this.createElement('input');
        }
    }
    
}

private  limpiaFormulario():void{
    this.inputEdad!.value=""
    this.inputEmail!.value=""
    this.inputCargo!.value=""
    this.inputNombre!.value=""
}

private asignarUsuarioSeleccionado(usuario:Usuarios):void{
    this.inputEdad!.value= usuario.edad.toString()
    this.inputEmail!.value=usuario.email
    this.inputCargo!.value=usuario.cargo.toString()
    this.inputNombre!.value=usuario.nombre
}

private obtenerCamposFormulario(){
    const edad = this.inputEdad!.value
    const email = this.inputEmail!.value
    const cargo = this.inputCargo!.value
    const nombre = this.inputNombre!.value
    if(edad || email || cargo || nombre){
        return {"edad":edad,"email":email,"cargo":cargo,"nombre":nombre}
    }
    else 
        return false;

}

private async accionesBotones(acceso: Accesos){
    console.log( `boton ${acceso} fue presionado`);
    //this.resultadoBusqueda!.innerHTML='';
    switch(acceso){
        case Accesos.ACTUALIZAR:
            if(this.usuarioSeleccionado){
                const arrayUpdate  = this.obtenerCamposFormulario();
                if(arrayUpdate!=false){
                    const respuesta = await this.ServicioCrear.actualizaUsuario(this.tokenSesion!.MiTocken,this.usuarioSeleccionado,arrayUpdate);
                    if (respuesta)
                        alert('Se actualiza usuario exitosamente');
                        else
                            alert ('No se puede actualizar usuario');
                    
                }
                else{
                    alert('Debe ingresar por lo menos un campo')  
                }
            }
            else{
                alert('primero debe buscar y seleccionar un registro');
            }
            break;    
        case Accesos.CREA:
            const array = this.obtenerCamposFormulario();    
            if(array!=false){
                const respuesta  = await this.ServicioCrear.crearUsuario(this.tokenSesion!.MiTocken,array);
                if(respuesta){
                    this.limpiaFormulario();
                    alert('Se crea usuario exitosamente')

                }
                else{
                    alert('problema al crear usuario')
                }
            }

            else 
                alert('Debe ingresar por lo menos un campo')
        break;
        case Accesos.LEER:
            const usuarios = await this.servicioLeer.obtenerUsuario(
                this.tokenSesion!.MiTocken,
                this.inputBusqueda!.value
            );
            this.resultadoBusqueda!.innerHTML='';
            for (const usuario of usuarios){
                const label = this.createElement('label',JSON.stringify(usuario));
                label.onclick= () =>{
                    label.classList.toggle('selectedLabel');
                    this.usuarioSeleccionado=usuario;
                    this.labelSeleccionado=label;
                    this.asignarUsuarioSeleccionado(usuario);
                }
                this.resultadoBusqueda!.append(label);
                this.resultadoBusqueda!.append(document.createElement('br'));
            }
            break;
            case Accesos.BORRAR:
                if(this.usuarioSeleccionado){
                    await this.servicioLeer.borrarUsuario(this.tokenSesion!.MiTocken,this.usuarioSeleccionado);
                    this.labelSeleccionado!.innerHTML='';
                }
                break;
        default: break;    
    }
}

}
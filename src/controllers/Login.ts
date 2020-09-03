import { Base } from "./Base";
import { ServicioLogin } from "../servicios/ServicioLogin";
import { LinkValorTexto } from "./Decorators";



export class Login extends Base{

    private servicioLogin=new  ServicioLogin();
    private  title = this.createElement('h2','Por favor inicie sesión');
    private  usuario = this.createElement('label','Usuario:');
    private inputUsuario= this.createElement('input');
    private br2= this.createElement('br');
    private  pass = this.createElement('label','Clave:');
    private inputClave= this.createElement('input');
    
    

    private br = this.createElement('br');
    private  button = this.createElement('button','Login',async ()=>{
        if(this.inputUsuario.value && this.inputClave.value){
         this.errorLabelString='';
        const log=await  this.servicioLogin.login(this.inputUsuario.value,this.inputClave.value);
        if (log){
            this.router.irInicio(log);
        }
        else{
            this.errorLabelString='Error de autentificación.';
        }
        } 
        else{
            this.errorLabelString='Debe ingresar usuario y contraseña';
        }
 });


 private errorLabel = this.createElement('label');

    @LinkValorTexto('errorLabel')
    private errorLabelString : string = '';


    public crearVista():HTMLDivElement{
        
        this.errorLabel.id='errorLabel';
        this.errorLabel.style.color='red';
        this.button.classList.add('btn-info')
        this.inputClave.type='Password';
        return this.contenedor;
    }
}
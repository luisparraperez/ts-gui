import { MainController } from "./controllers/MainController";
import { Login } from "./controllers/Login";
import { tokenSesion } from "./modelos/ModeloLogin";
import { Inicio } from "./controllers/Inicio";


export class Router {

    private elemento= document.getElementById('contenedor-principal');
    public peticion(){

            console.log('peticion desde'+this.obtenerRuta())
            switch (this.obtenerRuta()) {
                case '/login':
                    this.alLogin();
                    break ;
                case '/inicio':
                    this.irInicio(undefined);
                    break;
                default:
                    if(this.elemento){
                        const mainController : MainController= new MainController(this);
                        this.elemento.append(mainController.crearVista());
                    }
                    break;
            }
    }

    public alLogin(){
        if(this.elemento){
            this.elemento.innerHTML='';
            const login : Login= new Login(this);
            this.elemento.append(login.crearVista());
        }
    }

    public irInicio(tokenSesion: tokenSesion|undefined){
        if(this.elemento){
            this.elemento.innerHTML='';
            const inicio : Inicio= new Inicio(this);
            if(tokenSesion)
                inicio.setTokenSesion(tokenSesion);
            this.elemento.append(inicio.crearVista());

                
        }
    }

    private obtenerRuta(){
        return window.location.pathname;
    }
}
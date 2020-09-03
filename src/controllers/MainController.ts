import { Base } from "./Base";

export class MainController extends Base{

    public crearVista():HTMLDivElement{
        const title = this.createElement('h2','Hola mundo');
        const articulo = this.createElement('div','hola po loco');
        const button = this.createElement('button','Login',()=>{
            this.router.alLogin();
        });

        return this.contenedor;
    }
}
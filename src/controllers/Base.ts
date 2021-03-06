import { Router } from "../Router";

export abstract class Base{
    protected contenedor = document.createElement('div');
    protected router: Router;

    public constructor(router:Router){
        this.router=router;
    }

    public abstract crearVista():HTMLDivElement
    protected createElement<K extends keyof HTMLElementTagNameMap>(
        elementType: K, innerText?: string,action?:any
    ): HTMLElementTagNameMap[K] {
        const element = document.createElement(elementType);
        if (innerText) {
            element.innerText = innerText;
        }
        if (action){
            element.onclick=action;
        }
        this.contenedor.append(element)
        return element;
    }

    protected crearBreak(){
        this.createElement('br');

    }
    
} 
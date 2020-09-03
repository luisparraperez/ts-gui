import { Router } from "./Router";

export class Main{
    private router:Router= new Router();

    public constructor(){
        
        console.log("aki");
    }

    public lanzaApp(){
        this.router.peticion()
    }
}

new Main().lanzaApp();
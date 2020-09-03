import { Base } from "./Base";

export function  LinkValorTexto(elementoId: string){
    return function(objetivo:Base, valor:string){
            let propiedad  = (objetivo as any)[valor];
            const getter = ()=>{
                return propiedad;
            }

            const setter = (nuevoValor:string)=>{
                const elemento= document.getElementById(elementoId);
                propiedad = nuevoValor;
                if (elemento){
                    elemento.innerText=nuevoValor;
                    if(!nuevoValor)
                        elemento.style.visibility='hidden'
                    
                    else
                        elemento.style.visibility='visible';
                }
                
            }

            Object.defineProperty(objetivo,valor,{
                get:getter,
                set:setter,
                configurable:true,
                enumerable:true
            })
    }
}
import { Servidor } from "./model/servidor";
import { Computador } from "./model/computador";
import { iProduto } from "./model/iProduto";


export class FactoryComputer {
    
    static createComputer(tipo: string, ram: number, hdd: number, cpu: number): iProduto | null {
        if(tipo.toLowerCase() === "computador"){
            return new Computador(ram, hdd, cpu);
        }
        else if(tipo.toLowerCase() === "servidor"){
            return new Servidor(ram, hdd, cpu);
        }

        return null;
        
    }
}

import { Computador } from "./model/computador";
import { Servidor } from "./model/servidor";
import { FactoryComputer } from "./FactoryComputer";

const computador = FactoryComputer.createComputer ("Computador", 16, 1024, 2.4);
const servidor = FactoryComputer.createComputer ("Servidor", 32, 2048, 3.2);

if(computador && servidor){
    
    console.log(computador.toString());
    console.log(servidor.toString());

} else {
    console.log("resultado = null");
}

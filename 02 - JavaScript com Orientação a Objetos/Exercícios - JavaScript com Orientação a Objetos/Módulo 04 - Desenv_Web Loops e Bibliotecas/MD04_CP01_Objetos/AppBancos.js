// importar classes
import { Clientes } from "./Clientes.js";
import { ContaCorrente } from "./ContaCorrente.js";
import * as Funcoes from './Funcoes.js';

var listaContas = [];

var cadCliente1 = new Clientes(1, "Luciano Galhardo", 994682010);
var cadCliente2 = new Clientes(2, "Emanuel Carvalho", 994165059);
console.log(cadCliente1);
console.log(cadCliente2);

var cadConta1 = new ContaCorrente(18900, 6, 1358, "CC", 1200.00);
var cadConta2 = new ContaCorrente(20700, 1, 6298, "CP", 750.00);

var cadCliente3 = new Clientes (Number(prompt('Informeo Id do Cliente:')), prompt('Informe o nome do Cliente:'));

console.log(cadCliente3);



cadConta1.addCliente(cadCliente1);
cadConta2.addCliente(cadCliente2);

listaContas.push(cadConta1);
listaContas.push(cadConta2);

console.log(listaContas);

console.log(cadConta1);
console.log(cadConta2);


var sair;
var op = 0;

do {  
    
    Funcoes.MenuPrincipal();
    
    switch (op) {
        case 1:
            alert('vc escolheu a opção 1');
            //Adicionar();
            sair = "N";
            break;
            
        case 2:
            alert('vc selecionou a opção 2');
            sair = "N";
            break;
            
        case 3:
            alert('vc selecionou a opção 3');
            sair = "N";
            break;
            
        case 4:
            break;
   
        default:
            alert('Opção inválida, tente novamente !!!')
    
    }

    Funcoes.FinalizarSistema();
    
    
} while (sair === "N");
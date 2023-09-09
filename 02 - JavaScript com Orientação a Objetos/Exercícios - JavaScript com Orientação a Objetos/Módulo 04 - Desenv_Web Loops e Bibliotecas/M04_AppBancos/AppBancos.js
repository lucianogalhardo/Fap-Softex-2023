// importar classes
import { Clientes } from "./Clientes.js";
import { ContaCorrente } from "./ContaCorrente.js";
import * as Funcoes from './Funcoes.js';

var listaClientes = [];
var listaContas = [];

var cadCliente1 = new Clientes(1, "Luciano Galhardo", 994682010);
var cadCliente2 = new Clientes(2, "Emanuel Carvalho", 994165059);
var cadCliente3 = new Clientes(Number(prompt('Informeo Id do Cliente:')), prompt('Informe o nome do Cliente:'));
var cadCliente4 = new Clientes();

cadCliente3.telefoneClientes = 999999999;

cadCliente4.idClientes = Number(prompt('informe id: '));
cadCliente4.nomeClientes = prompt('Informe o nome: '); 
cadCliente4.telefoneClientes = Number(prompt('Informe o telefone: '));

console.log(cadCliente1);
console.log(cadCliente2);
console.log(cadCliente3);
console.log(cadCliente4);

listaClientes.push(cadCliente1);
listaClientes.push(cadCliente2);
listaClientes.push(cadCliente3);
listaClientes.push(cadCliente4);

console.log(listaClientes);




var cadConta1 = new ContaCorrente(18900, 6, 1358, "CC", 1200.00);
var cadConta2 = new ContaCorrente(20700, 1, 6298, "CP", 750.00);

cadConta1.addCliente(cadCliente1);
cadConta2.addCliente(cadCliente2);

listaContas.push(cadConta1);
listaContas.push(cadConta2);

console.log(listaContas);

console.log(cadConta1);
console.log(cadConta2);

/*
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

*/
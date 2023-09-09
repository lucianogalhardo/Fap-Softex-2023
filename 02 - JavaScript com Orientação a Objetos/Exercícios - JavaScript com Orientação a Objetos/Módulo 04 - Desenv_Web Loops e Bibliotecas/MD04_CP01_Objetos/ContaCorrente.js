// Criar um objeto chamado "Banco".

import { Clientes } from "./Clientes.js";

// Propriedades:
// conta, agência, saldo, tipo de conta

// Métodos: 
// buscar saldo - deve retornar o valor do saldo atual
// depósito - passar valor como parâmetro e adcioná-lo no final do objeto
// saque - passar valor como parâmetro e subtraí-lo no saldo final do objeto
// numero da conta - deve retornar o número da conta

//importação class 

export class ContaCorrente{

    constructor( contaBanco, digConta, agenciaBanco, tipoContaBanco, saldoContaBanco){
        
        this.clienteBanco = [];
        this.contaBanco = contaBanco;
        this.digConta = digConta;
        this.agenciaBanco = agenciaBanco;
        this.tipoContaBanco = tipoContaBanco;
        this.saldoContaBanco = 0.00;

    }

        addCliente(cliente){
            this.clienteBanco.push(cliente);
            this.saldoContaBanco = 1200;
        }
 
}

        

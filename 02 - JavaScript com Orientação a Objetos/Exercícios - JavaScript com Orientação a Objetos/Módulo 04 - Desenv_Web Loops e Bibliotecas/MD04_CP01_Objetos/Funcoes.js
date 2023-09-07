// Criar um objeto chamado "Banco".

// Propriedades:
// conta, agência, saldo, tipo de conta

// Métodos: 
// buscar saldo - deve retornar o valor do saldo atual
// depósito - passar valor como parâmetro e adcioná-lo no final do objeto
// saque - passar valor como parâmetro e subtraí-lo no saldo final do objeto
// numero da conta - deve retornar o número da conta

//importação class 
import { Clientes } from "./Clientes.js";


export class Bancos{

    constructor (clienteBanco, contaBanco, agenciaBanco, tipoContaBanco){
        
        this.clienteBanco = clienteBanco;
        this.contaBanco = contaBanco;
        this.agenciaBanco = agenciaBanco;
        this.tipoContaBanco = tipoContaBanco;
        this.saldoContaBanco = 0.00;

    }

}

        

// Declaração de Variáveis globais do sistema
var sair;
var op = 0;
var valorConta;
var banco = new Banco();

// cria objeto banco
function Banco(clienteBanco, contaBanco, agenciaBanco, tipoContaBanco, saldoContaBanco) {
    this.numContaBanco = 0;
    this.agenciaBanco = 0;
    this.tipoContaBanco = '';
    this.saldoContaBanco = 0.00;

    // ler dados
    Leitor = function lerDados(){
        var cadConta = {}
        var tipConta;

        cadConta.numContaBanco = (min, max) => Math.floor(Math.random() * (max - min) + min);
        cadConta.agenciaBanco = parseInt(prompt('Informe a agência'));
        var tipConta = prompt(`
        'Selecione o tipo de Conta:'
        (CC)- Conta Corrente  |  (CP)- Poupança`).toUpperCase;
            if(tipConta == 'CC'){
                cadConta.tipoContaBanco = "Conta Corrente";
            }else {
                cadConta.tipoContaBanco = "Poupança";
            }

        cadConta.saldoContaBanco = 0.00;

        alert(`
        CONTA CADASTRADA COM SUCESSO !!!

        Conta: ${cadConta.numContaBanco(1000, 10000)}
        Agência: ${cadConta.agenciaBanco}
        Tipo Conta: ${cadConta.tipoContaBanco}
        Saldo Conta: ${cadConta.saldoContaBanco.toFixed(2)}`);

        return cadConta;

    }

    // método ou função cadastrar contas
    Adicionar = function CadastrarConta(){
        this.Leitor();
    
    }

    // atualizar dados
    Atualizar = function AtualizarDados() {
        alert('Atualização de dados.');

    }

    Excluir = function ExcluirDados() {
        alert('Excluir dados.');

    }
    
    //métodos ou função mostrar saldo,  associada ao objeto:
    mostrarSaldo = function SaldoValor() {
        alert(this.saldoContaBanco);
        
    }

    //métodos ou função mostrar numero conta,  associada ao objeto:
    mostrarConta = function NumConta() {
        alert(this.contaBanco);
        
    }

}

// Função imprime menu principal
function MenuPrincipal() {
    op = parseInt(prompt(`
    "Bem vindo ao Menu do Sistema Banco"
    
    Selecione a opção desejada:
    
    (1)- Abertura de Contas.
    (2)- Movimentação bancária.
    (3)- Relatórios.
    (4)- Finalizar Sistema.
    
    `));
}

// Função para finalizar sistema
function FinalizarSistema() {
    
    do {
        sair = prompt("deseja sair do sistema? ").toUpperCase();   
            if(sair === "S" || sair === "N"){
                break;
                
            }else {
                console.log('Opção inválida !!');
            }
            
    } while (sair);

}


do {  
    
    MenuPrincipal();

    switch (op) {
        case 1:
            Adicionar();
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

    FinalizarSistema();
    
    
} while (sair === "N");

    
// var minhaConta = new Banco();
// minhaConta.contaBanco = parseInt(prompt())

// mostrarConta(minhaConta.clienteBanco);


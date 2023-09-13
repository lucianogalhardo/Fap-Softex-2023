// Criar um objeto chamado "Banco"
// Propriedades:  conta, agência, saldo, tipo de conta
class Banco{

    constructor(numConta, numAgencia, tipoConta, saldoConta){
        this.numConta = numConta;
        this.numAgencia = numAgencia;
        this.tipoConta = tipoConta;
        this.saldoConta = 0.00;
    }

    //métodos ou funções associadas ao objeto:
    mostrarSaldo = function SaldoValor() {
        console.log(this.saldoConta);
        
    }

    // método mostrar numero da conta
    mostrarConta = function numeroConta() {
        console.log(this.numConta);
    
    }
}

// Funcao Menu Principal
function MenuPrincipal() {
    op = Number(prompt(`
    Bem vindo ao Menu principal !!!
    
    Selecione a opção desejada:
    (1)- Contas
    (2)- Movimentação
    (3)- Consultar Saldo
    (4)- Finalizar Sistema`));

}

// Funcao Sub Menu Movimentacao
function SubMenuMovimentacao() {
    op2 = prompt(`
    Menu Movimentação !!!
    
    Selecione a opção desejada:
    (D)- Depósitos
    (S)- Saques
    (V)- Voltar ao Menu Principal `).toUpperCase();

}

// Funcao Finalizar Sistema
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

function Depositos() {
    creditos = parseFloat(prompt(`Valor Depoósito: `)).toFixed(2);
    alert('Valor depositado com Sucesso !!!');
    SubMenuMovimentacao();
    
    
}

function Saques() {
    debitos = parseFloat(prompt(`Valor Saque: `)).toFixed(2);
    alert('Saque realizado com Sucesso !!!');
    SubMenuMovimentacao();

}    


// Métodos: 
// depósito - passar valor como parâmetro e adcioná-lo no saldo final do objeto
// saque - passar valor como parâmetro e subtraí-lo no saldo final do objeto
// numero da conta - deve retornar o número da conta
// buscar saldo - deve retornar o valor do saldo atual


/*
var listaContas = [];

var cadConta = new Banco (Number(prompt('Informe o numero da conta: ')), 
Number(prompt('Informe o número da Agênca: ')),
prompt('Informe tipo da conta: (CC) Conta corrente | (CP) Conta Poupança'),)

listaContas.push(cadConta);

console.log(listaContas);
//mostrarSaldo(cadConta.saldoConta);
cadConta.mostrarConta();
cadConta.mostrarSaldo();

*/

var op = 0;
var op2= "";
var sair;
var creditos = 0.00;
var debitos = 0.00;
var valorDepositos = 0.00;
var valorSaques = 0.00;
var saldoTotal = 0.00;
var listaContas = [];

do {

    MenuPrincipal();

    switch (op) {
        case 1:
            alert('vc escolheu a opção 1');
            
            break;
            
        case 2:
            
            SubMenuMovimentacao();
                do {
                    if(op2 === "D"){
                        Depositos();
                        saldoTotal += Number(creditos);

                    } else if(op2 === "S"){
                        Saques();
                        saldoTotal -= Number(debitos);

                    } else if(op2 === "V"){
                        break;

                    } else {
                        alert('Opção Inválida !!!');

                    }

                } while (op2 !== "V");    
                
            MenuPrincipal();
            
        case 3:
        
            alert(`Saldo atual da conta:
            R$ ${saldoTotal}`);
            console.log(typeof saldoTotal);
            console.log(typeof valorDepositos);
            console.log(typeof valorSaques);
            console.log(typeof creditos);
            console.log(typeof debitos);
            break;
            
        case 4:
            break;
   
        default:
            alert('Opção inválida, tente novamente !!!')
    
    }

    FinalizarSistema();


    
} while (sair == "N");

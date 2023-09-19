// Criar um objeto chamado "Banco"
// Propriedades:  conta, agência, saldo, tipo de conta
class Banco{
    
    constructor(nomeCliente, cpfCliente, numConta, numAgencia, tipoConta, saldoConta){
        this.nomeCliente = nomeCliente;
        this.cpfCliente = cpfCliente;
        this.numConta = numConta;
        this.numAgencia = numAgencia;
        this.tipoConta = tipoConta;
        this.saldoConta = 0.00;
    }
    
    /*
    //métodos:
    
    // buscar saldo - deve retornar o valor do saldo atual
    mostrarSaldo = function SaldoValor() {
        console.log(this.saldoConta);
        
    }

    
    // numero da conta - deve retornar o número da conta
    mostrarConta = function numeroConta() {
        console.log(this.numConta);
    
    }
    */
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
    
    // Criacao dos Metodos:

    // Exibi o numero da Conta

    function mostrarConta() {
        
        for (let p of listaContas) {
            console.log("Conta Cadastrada com Sucesso !!! ")
            for (const key in p) {
                console.log(`\t${key} => ${p[key]}`);
        
            }}
            
    }

    function mostrarSaldo() {
        alert(listaContas.saldoConta);
    }

    // depósito - passar valor como parâmetro e adcioná-lo no saldo final do objeto
    function Depositos() {
    creditos = parseFloat(prompt(`Valor Depoósito: `)).toFixed(2);
    alert('Valor depositado com Sucesso !!!');
    SubMenuMovimentacao();
    
    
}

    // saque - passar valor como parâmetro e subtraí-lo no saldo final do objeto
    function Saques() {
        debitos = parseFloat(prompt(`Valor Saque: `)).toFixed(2);
        alert('Saque realizado com Sucesso !!!');
        SubMenuMovimentacao();

}    


var op = 0;
var op2= "";
var sair;
var creditos = 0.00;
var debitos = 0.00;
var saldoTotal = 0.00;

var listaContas = [];



do {
    
    MenuPrincipal();
    
    switch (op) {
        case 1:
            var cadConta = new Banco (prompt('Informe o nome completo do cliente: '),
            parseInt(prompt('Informe o CPF do cliente: ')),
            parseInt(prompt('Informe o numero da conta: ')), 
            parseInt(prompt('Informe o número da Agênca: ')),
            prompt('Informe tipo da conta: (CC) Conta corrente | (CP) Conta Poupança'));

            listaContas.push(cadConta);
            mostrarConta()
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
                        break;

                    }

                } while (op2 !== "V");    
                
            MenuPrincipal();
            
        case 3:
        
            alert(`Saldo atual da conta:
            R$ ${mostrarSaldo()}`);
            break;
            
        case 4:
            break;
   
        default:
            alert('Opção inválida, tente novamente !!!')
    
    }

    FinalizarSistema();

    
    
} while (sair == "N");


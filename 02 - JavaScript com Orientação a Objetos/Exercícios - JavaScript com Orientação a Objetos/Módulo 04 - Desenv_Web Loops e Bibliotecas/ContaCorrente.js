// Criar um objeto chamado "Banco".

// Propriedades:
// conta, agência, saldo, tipo de conta

// Métodos: 
// buscar saldo - deve retornar o valor do saldo atual
// depósito - passar valor como parâmetro e adcioná-lo no final do objeto
// saque - passar valor como parâmetro e subtraí-lo no saldo final do objeto
// numero da conta - deve retornar o número da conta


// cria objeto banco
function Banco(clienteBanco, contaBanco, agênciaBanco, tipoContaBanco, saldoContaBanco) {
    this.contaBanco = contaBanco;
    this.agênciaBanco = agênciaBanco;
    this.tipoContaBanco = tipoContaBanco;
    this.saldoContaBanco = saldoContaBanco;

    // método ou função cadastrar contas
    Adicionar = function CadastrarConta(){
        alert('vamos cadastrar uma conta');

    }
    
    //métodos ou função mostrar saldo,  associada ao objeto:
    mostrarSaldo = function SaldoValor() {
        alert(this.saldoContaBanco);
        
    }

    //métodos ou função mostrar numero conta,  associada ao objeto:
    mostrarConta = function NumConta() {
        alert(this.saldoContaBanco);
        
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

// Declaração de Variáveis globais do sistema
var sair;
var op = 0;
var valorConta;
var banco = new Banco();

do {  
    
    MenuPrincipal();

    switch (op) {
        case 1:
            Adicionar();
            valorConta = (min, max) => Math.floor(Math.random() * (max - min) + min);
            banco.contaBanco = valorConta;
            alert(banco.contaBanco(10001, 100000));
            
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


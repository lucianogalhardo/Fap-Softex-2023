// Criar um objeto chamado "Banco".

// Propriedades:
// conta, agência, saldo, tipo de conta

// Métodos: 
// buscar saldo - deve retornar o valor do saldo atual
// depósito - passar valor como parâmetro e adcioná-lo no final do objeto
// saque - passar valor como parâmetro e subtraí-lo no saldo final do objeto
// numero da conta - deve retornar o número da conta



// Declaração de Variáveis globais do sistema

var valorConta;
//var banco = new Banco();


    // ler dados
    /*
    Leitor = function lerDados(){
        var cadContas = {}
        var tipConta;

        cadContas.numContaBanco = (min, max) => Math.floor(Math.random() * (max - min) + min);
        cadContas.agenciaBanco = parseInt(prompt('Informe a agência'));
        var tipConta = prompt(`
        'Selecione o tipo de Conta:'
        (CC)- Conta Corrente  |  (CP)- Poupança`).toUpperCase;
            if(tipConta == 'CC'){
                cadContas.tipoContaBanco = "Conta Corrente";
            }else {
                cadContas.tipoContaBanco = "Poupança";
            }

        cadContas.saldoContaBanco = 0.00;

        alert(`
        CONTA CADASTRADA COM SUCESSO !!!

        Conta: ${cadContas.numContaBanco(1000, 10000)}
        Agência: ${cadContsa.agenciaBanco}
        Tipo Conta: ${cadContas.tipoContaBanco}
        Saldo Conta: ${cadContas.saldoContaBanco.toFixed(2)}`);

        return cadContas;

        }
    */

    /*
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

*/


// Função imprime menu principal
export function MenuPrincipal() {
    
    op = parseInt(prompt(`"Bem vindo ao Menu do Sistema Banco"
    
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


    
// var minhaConta = new Banco();
// minhaConta.contaBanco = parseInt(prompt())

// mostrarConta(minhaConta.clienteBanco);


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
    
    
    //métodos:
    
    // buscar saldo - deve retornar o valor do saldo atual
    mostrarSaldo = function SaldoValor() {
        console.log(`Saldo em Conta: ${this.saldoConta}`);
        
    }
    
    
    // numero da conta - deve retornar o número da conta
    mostrarConta = function numeroConta() {
        console.log(`Número da Conta: ${this.numConta}`);
    
    }

    // Dados da conta cadastrada
    dadosConta = function exibirDadosConta() {
        alert(`
        CONTA CADASTRADA COM SUCESSO !!!
        Cliente ==> ${this.nomeCliente}
        CPF ======> ${this.cpfCliente}
        Conta ====> ${this.numConta}
        Agência ==> ${this.numAgencia}
        Saldo ====> ${this.saldoConta}`);
    }
    
}
   
    // Criacao dos Metodos:

    // depósito - passar valor como parâmetro e adcioná-lo no saldo final do objeto
    function Depositos() {
        creditos = parseFloat(prompt(`Valor Depoósito: `)).toFixed(2);
        alert('Valor depositado com Sucesso !!!');
   
}

    // saque - passar valor como parâmetro e subtraí-lo no saldo final do objeto
    function Saques() {
        debitos = parseFloat(prompt(`Valor Saque: `)).toFixed(2);
        alert('Saque realizado com Sucesso !!!');

}    

var creditos = 0.00;
var debitos = 0.00;
var saldoTotal = 0.00;

var listaContas = [];


var cadConta = new Banco (prompt('Informe o nome completo do cliente: '),
    parseInt(prompt('Informe o CPF do cliente: ')),
    parseInt(prompt('Informe o numero da conta: ')), 
    parseInt(prompt('Informe o número da Agênca: ')),
    prompt('Informe tipo da conta: (CC) Conta corrente | (CP) Conta Poupança'));

    Depositos();
    saldoTotal += Number(creditos);
    Depositos();
    saldoTotal += Number(creditos);
    Saques()
    saldoTotal -= Number(debitos);

    cadConta.saldoConta = saldoTotal;
    
    listaContas.push(cadConta);

    // exibir de forma organizada os elementos da conta cadastrada
    listaContas[0].dadosConta();


    // métodos para exibir o número e o saldo da conta
    listaContas[0].mostrarConta();
    listaContas[0].mostrarSaldo();

    



                       
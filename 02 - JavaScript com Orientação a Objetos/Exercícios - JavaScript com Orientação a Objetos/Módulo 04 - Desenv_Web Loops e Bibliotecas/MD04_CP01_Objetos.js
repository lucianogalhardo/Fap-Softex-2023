// Criando objetos
var banco = new Object();
    banco.conta = 75019;
    banco.saldo = 10500;
    banco.tipo = "CC";


// 1ª forma de criar objetos:
var conta = {numConta: 75019,
            numAgencia: 1506,
            tipo: "CPoup"
        }

// Objeto dentro de objeto:
var banco2 = {conta: {conta: 75019, numAgencia: 1506, tipo: "CC"}, saldo: 10500, tipo: "CC Individual"}


// 2ª forma de criar objetos, usando função construtora:
function Banco3(contaBanco3, saldoBanco3, tipoBanco3) {
    this.contaBanco3 = contaBanco3;
    this.saldoBanco3 = saldoBanco3;
    this.tipoBanco3 = tipoBanco3;   

    //métodos ou funções associadas ao objeto:
    mostrarSaldo = function SaldoValor() {
        console.log(this.saldoBanco3);
        
    }
}

var minhaConta = new Banco3();
var acumulado = 0;
valorDeposito = 0;
for(var i = 1 ; i < 6; i ++){
    valorDeposito = parseFloat(prompt(`Informe o ${i} ª valor para Crédito`));
    acumulado += valorDeposito;
}

minhaConta.saldoBanco3 = acumulado;

//Banco3.mostrarSaldo(Banco3.saldoBanco3);


// Imprime os objetos criados: 
console.log(banco);
console.log(conta);
console.log(banco2);
console.log(minhaConta);
console.log(minhaConta.saldoBanco3);

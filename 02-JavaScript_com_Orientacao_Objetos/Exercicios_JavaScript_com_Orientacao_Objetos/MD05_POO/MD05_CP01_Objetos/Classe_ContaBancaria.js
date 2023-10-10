
//Objeto Abstrato 2: Conta Bancaria
class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  consultarSaldo() {
    return `Saldo da conta de ${this.titular}: R$ ${this.saldo.toFixed(2)}`;
  }
}

const minhaConta = new ContaBancaria("João", 1000);
minhaConta.depositar(500);
console.log(minhaConta.consultarSaldo());
minhaConta.sacar(300);
console.log(minhaConta.consultarSaldo());
minhaConta.sacar(1200);
console.log(minhaConta.consultarSaldo());
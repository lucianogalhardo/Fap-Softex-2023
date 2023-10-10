
//Objeto Material 2: Computador
class Computador {
  constructor(marca, modelo, processador) {
    this.marca = marca;
    this.modelo = modelo;
    this.processador = processador;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
  }

  desligar() {
    this.ligado = false;
  }

  verificarStatus() {
    return `Computador ${this.marca} ${this.modelo}, processador ${this.processador}, ligado: ${this.ligado ? 'Sim' : 'Não'}`;
  }
}

const meuComputador = new Computador("Dell", "XPS 13", "Intel Core i7");
meuComputador.ligar();
console.log(meuComputador.verificarStatus());
meuComputador.desligar();
console.log(meuComputador.verificarStatus());


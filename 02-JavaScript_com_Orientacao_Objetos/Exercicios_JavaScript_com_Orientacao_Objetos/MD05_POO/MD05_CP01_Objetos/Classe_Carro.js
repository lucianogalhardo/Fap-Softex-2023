
//Objeto Material 1: Carro
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.velocidadeAtual = 0;
  }

  acelerar(aceleracao) {
    this.velocidadeAtual += aceleracao;
  }

  frear() {
    this.velocidadeAtual -= 10;
  }

  obterInformacoes() {
    return `Carro ${this.marca} ${this.modelo}, ano ${this.ano}, velocidade atual: ${this.velocidadeAtual} km/h`;
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 2022);
meuCarro.acelerar(50);
console.log(meuCarro.obterInformacoes());
meuCarro.frear();
console.log(meuCarro.obterInformacoes());



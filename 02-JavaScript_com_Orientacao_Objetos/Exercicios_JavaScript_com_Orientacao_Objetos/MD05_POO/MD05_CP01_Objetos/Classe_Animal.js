
//Objeto Abstrato 1: Animal
class Animal {
  constructor(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
  }

  emitirSom() {
    console.log("O animal emitiu um som.");
  }

  mover() {
    console.log("O animal se moveu.");
  }

  obterDescricao() {
    return `${this.nome} é um(a) ${this.especie} com ${this.idade} anos de idade.`;
  }
}

const meuAnimal = new Animal("Rex", "Cachorro", 3);
meuAnimal.emitirSom();
meuAnimal.mover();
console.log(meuAnimal.obterDescricao());

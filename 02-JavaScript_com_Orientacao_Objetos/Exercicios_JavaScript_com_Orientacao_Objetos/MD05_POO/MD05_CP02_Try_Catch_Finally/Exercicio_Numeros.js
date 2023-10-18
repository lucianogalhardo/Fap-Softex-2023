const prompt = require ('prompt-sync') ({sigint: true});

try {
    // Solicita ao usuário dois números
    var numero1 = parseFloat(prompt("Informe o primeiro número:"));
    var numero2 = parseFloat(prompt("Informe o segundo número:"));
  
    // Verifica se o segundo número é zero
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Digite números válidos!");
    }
  
    if (numero2 === 0) {
      throw new Error("Divisão por zero não é permitida!");
    }
  
    // Realiza a divisão
    var resultado = numero1 / numero2;
  
    // Exibe o resultado
    console.log("O resultado da divisão é: " + resultado);
  } catch (excecao) {
    // Captura e trata a exceção
    console.log("Ocorreu um erro: " + excecao.message);
  } finally {
    // Bloco opcional do finally
    console.log("Este bloco sempre será executado, independentemente de exceções.");
  }
  
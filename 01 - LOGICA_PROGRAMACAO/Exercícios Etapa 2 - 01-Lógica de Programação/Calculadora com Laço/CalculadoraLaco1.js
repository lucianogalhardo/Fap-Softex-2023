var n1, n2, oper, resultado;

// Função Calculadora, realiza operações entre 2 numeros
function Calculadora(n1, n2) {
  if (oper == 1) {
    resultado = n1 + n2;
  } else if (oper == 2) {
    resultado = n1 - n2;
  } else if (oper == 3) {
    resultado = n1 * n2;
  } else if (oper == 4 && n2 != 0) {
    resultado = n1 / n2;
  } else {
    resultado = 0;
  }
}



// app calculadora

while (!(oper == 0)) {
  oper = Number(window.prompt('<<<<<<< CALCULADORA >>>>>>>' + '\n' +
  'Escolha a opção:' + '\n' +
  '1. Soma' + '\n' +
  '2. Subtração' + '\n' +
  '3. Multiplicação' + '\n' +
  '4.Divisão' + '\n' +
  '0. Sair'));
  if (oper >= 1 && oper <= 4) {
    n1 = Number(window.prompt('Informe o n1: '));
    n2 = Number(window.prompt('Informe o n2: '));
    Calculadora(n1, n2);
    window.alert(resultado);
  } else if (oper == 0) {
    window.alert('App Finalizado!!!');
  } else {
    window.alert('Opção Inválida, Tente Novamente!!!');
  }
}


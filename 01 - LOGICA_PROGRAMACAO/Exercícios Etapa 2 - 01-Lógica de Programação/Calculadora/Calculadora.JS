var n1, n2, oper, resultado;

window.alert('CAULADORA');
n1 = Number(window.prompt('Informe o n1:'));
n2 = Number(window.prompt('Informe o n2: '));
oper = Number(window.prompt('Escolha a operação:' + '\n' +
                                '1. Soma' + '\n'  + '2. Subtração' + '\n' + 
                                '3. Multiplicação' + '\n' + '4. Divisão' + '\n'));
function Calculadora(n1, n2){
    if (oper == 1){
      var resultado = n1 + n2;
      alert ('Resultado da operação: ' + resultado);
    }
    else if (oper == 2){
      var resultado = n1 - n2;
      alert ('Resultado da operação: ' + resultado);
    }
    else if (oper == 3){
      var resultado = n1 * n2;
      alert ('Resultado da operação: ' + resultado);
    }
    else if (oper == 4){
      var resultado = n1 / n2;
      alert ('Resultado da operação: ' + resultado);
    }
    else {
      var resultado = 0;
      alert ('Resultado da operação: ' + resultado);
      
    }
}
    resultado = Calculadora (n1, n2);
    

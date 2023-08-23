//* App Calculadora

var n1, n2, resultado;

function calculadora(n1, n2, op){
 
    var op = prompt('Informe a Operação:  + , - , * , / ');

    if (op == '+') {
        calculadora = n1 + n2;

    } else if(op == '-') {
        calculadora = n1 - n2;

    } else if (op == '*') {
        calculadora = n1 * n2;

    } else if (op == '/') {
        if (n2 !=0 ) {
            calculadora = n1 / n2;    
        } else {
            throw new Error('Número não pode ser dividido por 0');
        }

    } else {
        throw new Error ('opção inválida !');
        
    }
    
}

try {
    var n1 = parseFloat(prompt('Informe o primeiro número: '));
    var n2 = parseFloat(prompt('Informe o segundo número: '));
    
            calculadora (n1, n2);
            console.log(calculadora);
        
} catch (error) {
    console.log(error);
}


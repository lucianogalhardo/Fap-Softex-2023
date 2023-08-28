/* app que contenha as seguintes funções:

1- função tradicional c/ palavra reservada function, sem parametros
2- função tradicional com parametros e um retorno de valor
3- um arrow function com parametros e que retorne um valor

*/


// 1- função tradicional c/ palavra reservada function, sem parametros
function ola() {
    alert("Olá turma, tudo bem?", '\n');
}

//2- função tradicional com parametros e um retorno de valor
function somar(n1, n2) {
    return n1 + n2;
}

//3- um arrow function com parametros e que retorne um valor
var multiplicar = (num1, num2) => num1 * num2;

var op = 0;

do {

    op = Number(prompt(`Selecione a opção desejada:

    1- Função tradicional c/ palavra reservada function, sem parâmetros
    2- Função tradicional com parâmetros e um retorno de valor
    3- Um arrow function com parâmetros e que retorne um valor`));

    switch (op) {
        case 1:
            ola();
            break;
        
        case 2:
            var n1 = 10;
            var n2 = 20;

            var resultado = somar (n1, n2);
            alert(`
            n1 = 10
            n2 = 20
            A soma entre n1 e n2 é: ${resultado} `);
            break;

        case 3:
            var resultado = multiplicar (10, 20);
            alert(`
            n1 = 10
            n2 = 20
            A multiplicação entre n1 e n2 é: ${resultado}`);
            break;
                                
        default:
            alert('Opção inválida, tente novamente!!!')
            
    }

        do {
            var sair = prompt('Deseja finalizar o App? (S / N)').toUpperCase();
                if(sair === "S" || sair === "N"){
                    break;
                }else {
                    alert('Opção inválida, digite "S" ou "N" ');
                }
        } while (sair);

    
} while (sair == "N");
alert('Tchau, até a próxima !!!');


















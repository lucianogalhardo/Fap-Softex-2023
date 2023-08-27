//* App Calculadora

var n1, n2, resultado;
var sair;

function somar(n1, n2){
         return n1 + n2;
    } 

function subtrair(n1, n2){
        return n1 - n2;
   } 

function multiplicar(n1, n2){
    return n1 * n2;
} 

function dividir(n1, n2){
    if(n2 === 0){
        throw new Error('não é possível dividir por 0 !!!')
    }
    return n1 / n2;
} 

    
do {

try {

    n1 = parseFloat(prompt('Informe o primeiro número: '));
    n2 = parseFloat(prompt('Informe o segundo número: '));
        
        var op = prompt('Informe a operação:  + , - , * , /');

                switch (op) {
                    case "+":
                        resultado = somar (n1,n2);
                        console.log(resultado);
                        break;
                    case "-":
                        resultado = subtrair (n1,n2);
                        console.log(resultado);
                        break;
                    case "*":
                        resultado = multiplicar (n1,n2);
                        console.log(resultado.toFixed(2));
                        break;
                    case "/":
                        resultado = dividir (n1,n2);
                        console.log(resultado.toFixed(2));
                        break;
                    default:
                        throw new Error('Opção inválida, tente novamente !!!');        

                }

} catch (e) {
    alert(e);

}   
    
do {
    sair = prompt("deseja refazer a operação? ").toUpperCase();   
        if(sair === "S" || sair === "N"){
            break;
            
        }else {
            console.log('Opção inválida !!!');
        }
        
} while (sair);


} while (sair == "S");

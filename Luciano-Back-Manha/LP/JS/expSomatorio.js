// Exponencial somatório.

var n=0;
var resultado=0;

n = parseInt(prompt('informe um número inteiro: '));
if (n > 0){
    for(var i = 0; i < n; i++){
        resultado = n * (i+1);
    }
    console.log(resultado);
    
} else {
    console.log('número inválido!!!');
}




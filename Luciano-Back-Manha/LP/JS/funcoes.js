function expSomatorio(n) {
    let resultado = 0;
    for(var i = 0; i < n; i++){
        resultado = n * (i+1);
    }
    return resultado;
}

var n=0;
var resultado=0;

n = parseInt(prompt('informe um número inteiro: '));
if (n > 0){
    resultado = expSomatorio(n);
    console.log(resultado);
    
} else {
    console.log('número inválido!!!');
}

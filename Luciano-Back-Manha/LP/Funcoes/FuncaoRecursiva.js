function CalcFatorial(n){
    if (n === 1){
        return 1;
    } else{
        return CalcFatorial (n - 1) * n;
    }
}

var n = parseInt(prompt('Informe um número:'));

if (n > 0){
    alert(`${n}! = ${CalcFatorial(n)}`);
} 
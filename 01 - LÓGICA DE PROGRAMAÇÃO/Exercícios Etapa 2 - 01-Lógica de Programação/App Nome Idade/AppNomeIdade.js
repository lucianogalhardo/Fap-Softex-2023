var idade, anoAtual = 2022;

var nome = window.prompt('Informe o Nome Completo:');

while(idade = 0){
    try{
    var anoNascimento = Number(window.prompt('Informe o ano de nasc. entre: (1922 e 2021)'));
            if (anoNascimento >= 1922 && anoNascimento <=2021){
                idade = anoAtual - anoNascimento;
                window.alert('Nome: ' + nome  + '\n' +
                            'Idade: ' + idade);
            }else{
                throw new Error();
            }

    }catch(error){
        window.alert('idade: ' + '\n' + 'ano nascimento inválido, tente outra vez');
    }
} 

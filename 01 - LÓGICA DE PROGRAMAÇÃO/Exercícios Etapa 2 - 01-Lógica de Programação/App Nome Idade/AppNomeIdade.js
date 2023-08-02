var idade, anoAtual = 2022;
var anoCorreto = false;

var nome = prompt('Informe o Nome Completo: ');

while(anoCorreto === false){
    try{
    var anoNascimento = Number(prompt('Informe o ano de nasc. entre: (1922 e 2021): '));
         if (anoNascimento >= 1922 && anoNascimento <=2021 ){
            idade = anoAtual - anoNascimento;
                console.log('Nome: ' + nome  + '\n' +
                                'Idade: ' + idade);
                anoCorreto = true;
            }else{
                throw new Error();
            }

    }catch(error){
            console.log('idade: ' + '\n' + 'ano nascimento inválido, tente outra vez');
    }
} 

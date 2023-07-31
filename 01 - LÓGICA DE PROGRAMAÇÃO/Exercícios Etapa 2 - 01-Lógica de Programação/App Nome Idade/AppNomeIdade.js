console.log('APP Nome e Idade');
var idade, anoAtual = 2022;

var nome = window.prompt('Informe o Nome Completo:');
var anoNascimento = Number(window.prompt('Informe o ano de nasc. entre: (1922 e 2021)'));



idade = anoAtual - anoNascimento;

window.alert('Nome: ' + nome  + '\n' +
            'Idade: ' + idade);
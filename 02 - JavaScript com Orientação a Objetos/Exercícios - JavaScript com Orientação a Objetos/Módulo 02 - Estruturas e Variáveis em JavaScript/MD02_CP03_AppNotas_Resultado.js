// App notas para calcular a média e apresentar o resultado.

var nota;
var media=0;
var soma=0;
var resultado;
var sair;

function calcularMedia(nota) {
        return nota / 3;
    }
    

do {

    try {

        for(var i = 1; i < 4; i++){

        do {
            nota = parseFloat(prompt("informe a " + i + "ª nota: "));
            if (nota >= 0 && nota <= 10){
                soma += nota;
                break;
            }else if(isNaN(nota)){
                throw new Error('Valor informado não é um número, tente novamente !');
            }
            
            console.log('Valor informado não pode ser: < 0  ou > 10')
            
        } while (nota);
        }


        media = calcularMedia (soma);

        resultado = (media >= 7) ? 'ALUNO APROVADO' : 'ALUNO REPROVADO';

        alert(`Média do aluno: ${media.toFixed(2)}
            ${resultado}`);
            
        soma = 0;

    } catch (e) {
        console.log(e);
    }

        do {
            sair = prompt("deseja refazer a operação? (S / N)").toUpperCase();   
                if(sair === "S" || sair === "N"){
                    break;
                    
                }else {
                    console.log('Opção inválida !!!');
                }
                
        } while (sair);
        
    
    } while (sair == "S");
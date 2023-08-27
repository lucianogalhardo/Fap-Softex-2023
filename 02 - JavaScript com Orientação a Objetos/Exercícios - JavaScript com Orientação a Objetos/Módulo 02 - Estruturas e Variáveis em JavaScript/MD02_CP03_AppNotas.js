//App informar ao aluno qual a nota para passar com media 7
var nota=0;
var soma=0;
var sair;

do {

    try {


        for(var i = 1; i < 3; i++){
        
            do {
                    
                nota = parseFloat(prompt("informe a " + i + "ª nota: "));
                if (nota >= 0 && nota <= 10){
                    soma += nota;
                       break;
                }else if(isNaN(nota)){
                    throw new Error('Valor informado não é um número, tente novamente !');
                }
            
                console.log('Valor informado não pode ser: < 0  ou > 10');
                    
            } while (nota);
                
        }
            alert('total de pontos acumulados é de: ' + soma + '\n' +
                        'você prcisa tirar nota: ' + " " + (21 - soma).toFixed(2) + ' para ser aprovado.' )
            soma = 0;

    } catch (e) {
        console.log(e);
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
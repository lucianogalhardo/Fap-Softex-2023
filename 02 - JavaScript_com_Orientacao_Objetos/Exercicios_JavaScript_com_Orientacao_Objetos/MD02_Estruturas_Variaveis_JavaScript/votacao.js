// app urna

// Cria Enumerado dos candidatos
const CANDIDATOS = {
    daniloNome : "Danilo Farias",
    daniloNum : 889,
    egitoNome : "Marcos Egito",
    egitoNum : 847,
    cleidianeNome : "Cleidiane Nunes",
    cleidianeNum : 515,
    brancoNome : "Votos Brancos",
    brancoNum : 0
}

    // Zerando os votos
    let qtdVotosDan = 0;
    let qtdVotosEgito = 0;
    let qtdVotosAne = 0;
    let qtdVotosBrancos = 0;
    let qtdVotosNulos = 0;
    let voto;
    let op;

do {
    // função imprime os votos zerados 
    //zeresima(qtdVotosDan, qtdVotosEgito, qtdVotosAne, qtdVotosBrancos, qtdVotosNulos);

    // iniciando a votação
    do {
        var testeLetra = false;
        voto = (prompt(`Bem vindos ao sistema de votação.
            Candidatos:
                ${CANDIDATOS.daniloNome} => ${CANDIDATOS.daniloNum}
                ${CANDIDATOS.egitoNome} => ${CANDIDATOS.egitoNum}
                ${CANDIDATOS.cleidianeNome} => ${CANDIDATOS.cleidianeNum}
                ${CANDIDATOS.brancoNome} => ${CANDIDATOS.brancoNum}

            vote: `));
        
        for (let i in voto){
            //alert(Number(voto[i]));
            if(isNaN(voto[i])){
                testeLetra = true;
            }
        }
        alert(testeLetra);

    } while (testeLetra);

    voto = Number(voto);
    if(voto === CANDIDATOS.daniloNum){
        qtdVotosDan++;
    }else if(voto === CANDIDATOS.egitoNum){
        qtdVotosEgito++;
    }else if(voto === CANDIDATOS.cleidianeNum){
        qtdVotosAne++;
    }else if(voto === CANDIDATOS.brancoNum){
        qtdVotosBrancos++;
    }else {
        qtdVotosNulos++;
    }

    Op = prompt("Deseja finalizar a votaçõ? (SIM | NÃO)").toUpperCase;

} while (op === "NÃO");
alert(`votos:
${CANDIDATOS.daniloNome} = ${qtdVotosDan}
${CANDIDATOS.egitoNome} = ${qtdVotosEgito}
${CANDIDATOS.cleidianeNome} = ${qtdVotosAne}
${CANDIDATOS.brancoNome} = ${qtdVotosBrancos}
Nulos: ${qtdVotosNulos}
`);


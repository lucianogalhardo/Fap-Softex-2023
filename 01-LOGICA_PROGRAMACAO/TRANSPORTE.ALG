Algoritmo "semnome"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 16/07/2023
Var
// Se��o de Declara��es das vari�veis 
transporte : caractere
resposta: caractere


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 

escreva("O transporte � terrestre? ")
	leia(resposta)
	se (resposta = "sim") ent�o
		escreva("Usa capacete?")
		leia(resposta)
          se (resposta = "sim")entao
              escreva("O TRANSPORTE � UMA MOTO")
          senao(resposta = "n�o") entao
              escreva("Cabe apenas 1 pessoa?")
              leia(resposta)
                  se (resposta = "sim")entao
                      escreva("� pesado?")
                      leia(resposta)
                      se (resposta = "sim")entao
          				     escreva("O TRANSPORTE � um TRATOR ")
                      senao
                          escreva("Tem pedal?")
                          leia(resposta)
                              se (resposta = "sim")entao
          				             escreva("O TRANSPORTE � uma BICICLETA ")
                              senao
                                  escreva("TENTE NOVAMENTE!!!")
                              fimse
                      fimse
                  senao
                  escreva("TENTE NOVAMENTE!!!")
                  fimse
          fimse
   senao
   escreva("TENTE NOVAMENTE!!!")
   fimse


Fimalgoritmo
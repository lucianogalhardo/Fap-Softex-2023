Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 16/07/2023
Var
// Seção de Declarações das variáveis 
transporte : caractere
resposta: caractere


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

escreva("O transporte é terrestre? ")
	leia(resposta)
	se (resposta = "sim") então
		escreva("Usa capacete?")
		leia(resposta)
          se (resposta = "sim")entao
              escreva("O TRANSPORTE É UMA MOTO")
          senao(resposta = "não") entao
              escreva("Cabe apenas 1 pessoa?")
              leia(resposta)
                  se (resposta = "sim")entao
                      escreva("é pesado?")
                      leia(resposta)
                      se (resposta = "sim")entao
          				     escreva("O TRANSPORTE É um TRATOR ")
                      senao
                          escreva("Tem pedal?")
                          leia(resposta)
                              se (resposta = "sim")entao
          				             escreva("O TRANSPORTE É uma BICICLETA ")
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
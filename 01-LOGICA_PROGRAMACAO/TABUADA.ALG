Algoritmo "semnome"
//
//
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 16/07/2023
Var
   // Se��o de Declara��es das vari�veis
   tabuada: inteiro
   contador: inteiro
   resp: caractere

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   repita

      escreval("Informe o n�mero da Tabuada: ")
      leia(tabuada)

      escreval("=======>  TABUADA DO ", tabuada, "  <=======")

      para contador <- 1 ate 10 faca
         escreval(tabuada, " X ", contador, " = ", tabuada * contador)

      fimpara

      escreval("Deseja Continuar?")
      leia(resp)

   ate resp = "n"



Fimalgoritmo
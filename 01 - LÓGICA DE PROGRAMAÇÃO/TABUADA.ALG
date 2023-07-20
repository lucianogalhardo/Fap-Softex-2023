Algoritmo "semnome"
//
//
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 16/07/2023
Var
   // Seção de Declarações das variáveis
   tabuada: inteiro
   contador: inteiro
   resp: caractere

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   repita

      escreval("Informe o número da Tabuada: ")
      leia(tabuada)

      escreval("=======>  TABUADA DO ", tabuada, "  <=======")

      para contador <- 1 ate 10 faca
         escreval(tabuada, " X ", contador, " = ", tabuada * contador)

      fimpara

      escreval("Deseja Continuar?")
      leia(resp)

   ate resp = "n"



Fimalgoritmo
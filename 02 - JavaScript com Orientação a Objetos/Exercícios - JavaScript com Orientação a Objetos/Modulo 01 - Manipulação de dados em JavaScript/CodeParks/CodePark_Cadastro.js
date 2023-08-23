let nome;
let salario = 0.00;
let idade;
let diploma = false;

console.log("=====> CADASTRO DE PESSOA <=====")

nome = prompt("Informe nome: ");
salario = parseFloat(prompt("Informe o salário: "));
idade = Number(prompt("Informe a idade: "));
diploma = Boolean(prompt("Possui Diploma? "));

console.log(nome);
console.log(salario);
console.log(idade);
console.log(diploma);
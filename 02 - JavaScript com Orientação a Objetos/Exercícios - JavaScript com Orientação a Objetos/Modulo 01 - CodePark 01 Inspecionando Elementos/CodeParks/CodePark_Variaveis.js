let  variavelBoolean;
let variavelBigInt;
let variavelString;
let variavelSymbol;

console.log("=====> VALORES VARIÁVEIS UNDEFINED <=====");
console.log("Variável Boolan:",variavelBoolean);
console.log("Variável BigInt:",variavelBigInt);
console.log("Variável String:",variavelString);
console.log("Variável Symbol:",variavelSymbol);

variavelBoolean = null;
variavelBigInt = null;
variavelString = null;
variavelSymbol = null;

console.log('\n' + "=====> VALORES VARIÁVEIS NULL <=====");
console.log("Variável Boolan:",variavelBoolean);
console.log("Variável BigInt:",variavelBigInt);
console.log("Variável String:",variavelString);
console.log("Variável Symbol:",variavelSymbol);

variavelBoolean = true;
variavelBigInt = 900719925124740999n;
variavelString = "Atribuindo valor a variável String";
variavelSymbol = Symbol();

console.log('\n' + "=====> VALORES VARIÁVEIS POR TIPO <=====");
console.log("Variável Boolan:",variavelBoolean);
console.log("Variável BigInt:",variavelBigInt);
console.log("Variável String:",variavelString);
console.log("Variável Symbol:",variavelSymbol);
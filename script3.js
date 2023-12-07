console.log("1. Operadores de comparação: "); 

const valorA = 10;
const valorB = 20;
const valorC = "Isabelle";
const valorD = "Ryan";

console.log("\nOperador '==' e Igual a (valor): "); 
let compare = valorA == valorB; 
console.log(compare);

console.log("Operador Estritamente igual '===':"); 
compare = valorA === 10;
console.log(compare);

console.log("Operador maior e menor:"); 
compare = valorA > valorB;
console.log(compare);

compare = valorA < valorB;
console.log(compare);

console.log('\n2. Estrutura If Else / Se Senão');


const idade = 90;

if (idade >= 18) {
    console.log("Maior de idade.");
} else {
    console.log('Menor de idade.');
};

console.log('\n'); 

const idadeAlberto = 27;
let canVote;

if (idadeAlberto >= 16) {
    canVote = "Pode Votar!";
} else {
    canVote = "Não pode Votar!";
};

console.log(canVote);

console.log('\n') 

console.log('3. Operador Ternário:');

const idadePessoa = 15;

const youCanVote = idadePessoa >= 16 ? "Pode Votar!" : "Não Pode";
console.log(youCanVote);


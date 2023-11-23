let teclado = require("prompt-sync")();

console.log('\n -------------');
console.log('\n \\\\\Digite a quantidade de números a serem lidos: //');
let qtd = parseInt(teclado());

let total = 0;
let maior = 0;
let menor = 0;

for (let i = 0; i < qtd; i++) {
    let numero = parseFloat(teclado(`Digite o número ${i + 1}: `));
    total += numero;
    if(i == 0){
    maior = numero;
    menor = numero;
    }
    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
}

let media = total / qtd;

console.log('\n O maior número é igual: ' + maior);
console.log('\n O menor número é igual: ' + menor);
console.log('\n A média dos números: ' + media);

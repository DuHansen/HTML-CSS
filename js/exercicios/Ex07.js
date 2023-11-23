let teclado = require("prompt-sync")();

let numeros = [];

for(let i = 0; i < 10; i++){
    numeros[i] = Number(teclado('informe um numero: '));
}


let numeroPesquisa = Number(teclado('informe o numero a ser pesquisado: '));
let contador = 0;

for(let numero of numeros){
    if(numero === numeroPesquisa){
        contador ++;
    }
}

console.log('A quantidade de vezes que o numero' + numeroPesquisa + 'aparece é' + contador +'.');

console.log(`A quantidade de vezes que o número ${numeroPesquisa} aparece é: ${contador}.`);

const teclado  = require('prompt-sync')();

let fraseoriginal = teclado('Informe uma frase: ');
let palavraPesquisada = teclado('Informe a palavra a ser pesquisada: ');
let frase = fraseOriginal.replace('.','');

frase = frase.replace(',', ' ');
let palavra = frase.split(' ');

let contador = 0;

for(let palavra of palavras){
    if(palavra === palavraPesquisada){
        contador ++;
    }
}

console.log('Frase: ' + fraseoriginal);
console.log('Palavra pesquisada' + palavraPesquisada);
console.log('Numero de ocorrencias' + contador);


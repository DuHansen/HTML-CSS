const teclado  = require('prompt-sync')();

let nome = [];

for(let i = 0; i < 10; i++){
    nome[i] = teclado('Escreva um nome: ');
}

for(let i = 0; i < nome.length; i++){
    console.log()
}
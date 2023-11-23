


let lista = [];
preencherArray(lista);
/*
let somar = function (lista) {
    let total = lista.reduce((soma, elemento) => soma + elemento, 0);
    console.log(total);

}*/
//console.log(lista);
somar(lista);
console.log(calcularTotal(lista));

imprimiImpares();

function calcularTotal(lista){

}
/*5 – DESENVOLVA UM PROGRAMA ONDE O USUÁRIO IRÁ INFORMAR 10 NÚMEROS E ARMAZENE-OS EM UM ARRAY
(CRIAR UMA FUNÇÃO PARA O PREENCHIMENTO). CRIE UMA FUNÇÃO PARA TOTALIZAR OS ELEMENTOS DO ARRAY.
CRIE UMA FUNÇÃO PARA IMPRIMIR OS VALORES ÍMPARES DO ARRAY. O PROGRAMA DEVE IMPRIMIR O VALOR 
ACUMULADO DOS ELEMENTOS, BEM COMO OS NÚMEROS ÍMPARES.

*/

const teclado = require('prompt-sync')();
let total = 0; // Inicializar total como zero
let numeros = [];
let impares = [];

// Preenchimento do array e cálculo dos valores
for (let i = 0; i < 10; i++) {
    numeros[i] = Number(teclado('Informe o ' + (i + 1) + 'º número: ')); // Converter entrada para número

    total += numeros[i]; // Acumular valor total

    if (numeros[i] % 2 !== 0) { // Verificar se o número é ímpar
        impares.push(numeros[i]); // Adicionar número ímpar ao array impares
    }
}

// Imprimir resultados
console.log('Os números ímpares são: ' + impares);
console.log('O valor total acumulado dos elementos é: ' + total);
/*3 – DESENVOLVA UM PROGRAMA PARA LER 10 NÚMEROS E ESCREVA QUANTOS DESSES NÚMEROS LIDOS SÃO
NEGATIVOS.*/ 

let teclado = require("prompt-sync")();

let contador = 0;
console.log('\n -------------');
console.log('\n \\\\\Digite dez números//');
for(let i = 0; i < 10; i++ ){
    let numeros = teclado('Digite '+ (i+1)+ ': ' );
    if(numeros<0){
       contador++;
    }
}

console.log('\n A quantidade de números negativos é igual: ' + contador);

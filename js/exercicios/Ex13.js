/*3 – ESCREVA UM PROGRAMA QUE LEIA A POPULAÇÃO E A TAXA DE CRESCIMENTOS ANUAL PARA UM PAÍS A E 
PARA UM PAÍS B. O PROGRAMA DEVE CALCULAR QUANTOS ANOS LEVARÁ PARA A POPULAÇÃO DO PAÍS A
SUPERAR A POPULAÇÃO DO PAÍS B, BEM COMO INFORMAR SE A POPULAÇÃO DO PAÍS A INICIALMENTE JÁ É 
MAIOR QUE A DO PAÍS B OU SE A TAXA DE CRESCIMENTO ANUAL DO PAÍS A É MENOR QUE A DO PAÍS B, POIS 
NESSES CASOS A POPULAÇÃO DO PAÍS AJÁ É MAIOR OU NUNCA SERÁ MAIOR QUE A POPULAÇÃO DO PAÍS B*/ 

const teclado  = require('prompt-sync')();
let anos = 0;
let populacaoA = Number(teclado('Informe a população do país A: '));
let taxaCrescimentoA = Number(teclado('Informe a taxa de crescimento da populção do país A: '));

let populacaoB = Number(teclado('Informe a população do país B: '));
let taxaCrescimentoB = Number(teclado('Informe a taxa de crescimento da populção do país B: '));

console.log('');


if(taxaCrescimentoA < taxaCrescimentoB){
    
}
else{
while(populacaoA < populacaoB){
    populacaoA += Math.floor(populacaoA * (taxaCrescimentoA/100));
    populacaoB += Math.floor(populacaoB * (taxaCrescimentoB/100));
    anos++;
}}
console.log('A população do País A levará' + anos + 'anos para superar a população do país B')
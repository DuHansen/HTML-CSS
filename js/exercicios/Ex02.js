/*2 - CRIE UM PROGRAMA PARA LER O NOME DE 2 TIMES DE FUTEBOL E O NÚMERO DE GOLS MARCADOS NA
PARTIDA (PARA CADA TIME). ESCREVA O NOME DO VENCEDOR. CASO NÃO HAJA VENCEDOR DEVERÁ SER
IMPRESSA A PALAVRA “EMPATE”.*/ 

let teclado =  require("prompt-sync")();

console.log('////////Partida_de_Futebol\\\\\\\\');

let nome1 = teclado('Qual o nome do primeiro time:');
let time1 = parseInt(teclado('Digite quantos gols foram marcados: '));

console.log('////////');
let nome2 = teclado('Qual o nome do primeiro time:');
let time2 = parseInt(teclado('Digite quantos gols foram marcados: '));


if(time1>time2){
    console.log('Time ' + nome1 + ' Vencedor!!');
}else{
    console.log('Time ' + nome2 + ' Vencedor!!');
}

if(time1 == time2){
    console.log('Jogo empatado');
}


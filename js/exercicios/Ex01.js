/* 1 - DESENVOLVA UM PROGRAMA QUE LEIA AS NOTAS DA 1ª E 2ª AVALIAÇÕES DE UM ALUNO. CALCULE A MÉDIA
ARITMÉTICA SIMPLES E ESCREVA UMA MENSAGEM QUE DIGA SE O ALUNO FOI OU NÃO APROVADO (CONSIDERAR
QUE NOTA IGUAL OU MAIOR QUE 7 O ALUNO É APROVADO). ESCREVA TAMBÉM A MÉDIA CALCULADA. */

let teclado =  require("prompt-sync")();

console.log('////////Alunos\\\\\\\\');


let nota1 = parseFloat(teclado('Digite sua primeira nota: '));

/*for(let i = 0; i < nota.length; i ++ ){
    let nota = [i];
}*/
console.log('Primeira nota:' + nota1);
console.log('////////');
let nota2 = parseFloat(teclado('Digite sua segunda nota: '));


console.log('Segunda nota:' + nota2);
console.log('////////');
let media = (nota1 + nota2)/2;
console.log('A MÉDIA das notas é: ' + media);
console.log('////////');

if(media>7){
    console.log('Aluno aprovado' );
}else{
    console.log('Aluno não aprovado' );
}


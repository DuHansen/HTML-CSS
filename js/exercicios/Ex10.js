const teclado  = require('prompt-sync')();

let texto = teclado('Informe um texto: ');
let busca = teclado('Informe a palavra a ser buscada: ');
let troca = teclado('Informe a palavra a ser trocada: ');

let regex = new RegExp('\\b' + busca + '\\b', 'gi'); //em 'gi' é para procurar 
console.log(regex);
let textoModificado = texto.replace(regex, troca);

console.log('Texto Original'+texto);
console.log('Texto modificado' + textoModificado);

texto = texto.replace('.' , ' ');
texto = texto.replace(',' , ' ');
texto = texto.replace('!' , ' ');
texto = texto.replace('?' , ' ');
let palavras = texto.split(' ');
let ocorrencias = 0;

for(let palavra of palavras){
    if(palavra.toLowerCase() === busca.toLowerCase){
        ocorrencias ++;
    }
}
console.log('Quantas ocorrencias tiveram: ' + ocorrencias);
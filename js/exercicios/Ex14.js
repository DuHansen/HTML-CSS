const teclado  = require('prompt-sync')();

/*4 – DESENVOLVA UM PROGRAMA ONDE O USUÁRIO IRÁ INFORMAR A QUANTIDADE DE NÚMEROS A SEREM 
DIGITADOS E ARMAZENADOS EM UM ARRAY. APÓS DEFINIR A QUANTIDADE O USUÁRIO IRÁ INFORMAR OS 
NÚMEROS (CRIAR UMA FUNÇÃO PARA O PREENCHIMENTO). O PROGRAMA DEVE IMPRIMIR OS ÍNDICES DO ARRAY 
CUJO NÚMERO ARMAZENADO É PAR (CRIAR UMA FUNÇÃO PARA A IMPRESSÃO).*/
let tamanho = teclado('Informe a quantidade de números a serem digitados: ');
let lista = new Array(tamanho);


preencherArray();
imprimirIndiceElementosParesArray(lista);

function preencherArray(){
    for(let i = 0; i < tamanho; i++){
        lista.push(Number(teclado('Número '+ i + ': ')));
    }
}

function imprimirIndiceElementosParesArray(lista){
    for(let indice in lista){
        if(lista[indice] % 2 == 0){
            console.log('Numeros pares' + indice);
        }
    }
}
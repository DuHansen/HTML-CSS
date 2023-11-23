let teclado = require("prompt-sync")();

let numero = parseInt(teclado('Informe um numero: '));
console.log ('Numero: ' + numero);

if(numero % 2  == 0){
    console.log('O numero é par');
}else{
    console.log('O numero é impar');
}

switch (numero){
    case 1: 
        console.log('Domingo');
        break;
    
    case 2: 
        console.log('Domingo');
        break;
    
    case 3: 
        console.log('Domingo');
        break;
    
    case 4: 
        console.log('Domingo');
        break;
    

    case 5: 
        console.log('Domingo');
        break;
    
    case 6: 
        console.log('Domingo');
        break;
    
    case 7: 
        console.log('Domingo');
        break;

    default: 
        console.log('Número fora do intervalo de 1 a 7');
    
}



let teclado =  require("prompt-sync")();

let numeros = [2, 4, 6, 3, 5, 7];

console.log(numeros);
console.log('\n ----------------');
let contador = 0;
while(contador < numeros.length){

        console.log(numeros[contador]);
        contador ++;
}
console.log('\n ----------------');
contador = 0;
do{
    console.log(numeros[contador]);
    contador ++;
}while(contador< numeros.length);

for(let i = 0; i <numeros.length; i++){
    console.log(numeros);
}
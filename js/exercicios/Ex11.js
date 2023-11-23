/*1 – DESENVOLVA UM PROGRAMA EM JAVASCRIPT QUE FAÇA AS SEGUINTES CONVERSÕES:
- CELSIUS PARA FAHRENHEIT;
- CELSIUS PARA KELVIN;
- FAHRENHEIT PARA CELSIUS;
- KELVIN PARA CELSIUS;
- FAHRENHEIT PARA KELVIN;
- KELVIN PARA FAHRENHEIT;
O PROGRAMA DEVE SOLICITAR QUE O USUÁRIO ESCOLHA QUAL A CONVERSÃO A SER REALIZADA, PEÇA A 
TEMPERATURA E APRESENTE A TEMPERATURA CONVERTIDA. O PROGRAMA DEVERÁ REPETIR O PROCESSO ATÉ 
QUE O USUÁRIO DECIDA ENCERRAR O PROGRAMA.
*/ 

const teclado  = require('prompt-sync')();
let continuar = true;

do{
console.log('Digite o que você deseja: ');
console.log('1 - Converter Celsius para Fahrenheit: ');
console.log('2 - Converter Celsius para Kelvin: ');
console.log('3 - Converter Fahrenheit para Celsius:  ');
console.log('4 - Converter Kelvin para Celsius: ')
console.log('5 - Converter Fahrenheit para Kelvin: ');
console.log('6 - Converter Kelvin para Fahrenheit: ');
console.log('7 - Sair');

switch(opcao){
    case 1: {
        converteCelsiusParaFahrenheit();
    }
    case 2: {
        converterCelsiusParaKelvin();
    }
    case 3: {
        converterFahreheitParaCelsius();
    }
    case 4: {
        converterKelvinParaCelsius();
    }
    case 5: {
        converterFahrenheitParaKelvin();
    }
    case 6: {
        converterKelvinParaFahrenheit();
    }
    case 7: {
        sair();
    }
}

}while (continuar);

function  converteCelsiusParaFahrenheit() {
    let temperatura = teclado('Qual a temperatura em Celsius para converter: ');
    console.log('A temperatura em Fahrenheit é: '+ (temperatura*1,8)+32);

}

function converterCelsiusParaKelvin(){

}

function converterFahreheitParaCelsius() {

}

function converterKelvinParaCelsius() {

}

function converterFahrenheitParaKelvin() {

}

function converterKelvinParaFahrenheit() {

}

function sair() {

}
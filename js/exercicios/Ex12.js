/*2 – DESENVOLVA UM PROGRAMA EM JAVASCRIPT QUE CALCULE A ÁREA DAS SEGUINTES FORMAS 
GEOMÉTRICAS:
- QUADRADO;
- RETÂNGULO;
- CÍRCULO;
- TRIÂNGULO;
O PROGRAMA DEVE SOLICITAR QUE O USUÁRIO ESCOLHA QUAL FIGURA GEOMÉTRICA ELE DESEJA CALCULAR A 
ÁREA E OS DADOS NECESSÁRIOS PARA O CÁLCULO. O PROGRAMA DEVE APRESENTAR A ÁREA CALCULADA. O
PROGRAMA DEVE REPETIR O PROCESSO ATÉ QUE O USUÁRIO DECIDA ENCERRAR O PROGRAMA.*/ 

const teclado  = require('prompt-sync')();
let continuar = true;

do{
console.log('Calculadora da area de figuras geometricas: ');
console.log('1 - Calcular a área de um Quadrado: ');
console.log('2 - Calcular a área de um Retangulo: ');
console.log('3 - Calcular a área de um Circulo: ');
console.log('4 - Calcular a área de um triângulo: ');
console.log('5 - Sair ');

let opcao = Number(teclado('Escolha uma opção: '));

switch (opcao) {
case 1: {
    AreaQuadrado();
    break;
}
case 2: {
    AreaRetangulo();
    break;
}
case 3: {
   AreaCirculo();
   break;
}
case 4: {
    AreaTriangulo();
    break;
}
case 5: {
    continuar = false; // Defina "continuar" como false para sair do loop
    break;
}
default: {
    console.log('Opção inválida.');
    break;
}}} while (continuar);

function AreaQuadrado() {
    let base = Number(teclado('Informe a base do quadrado: '));
    let altura = Number(teclado('Informe a altura do quadrado: '));
    console.log('\nA área do quadrado é: '+ base*altura );
}

function AreaRetangulo() {
    let base = Number(teclado('Informe a base do retangulo: '));
    let altura = Number(teclado('Informe a altura do retangulo: '));
    console.log('\nA área do Retangulo é: '+ base*altura );
}

function AreaCirculo() {
    let raio = Number(teclado(' Informe o raio do circulo: '));
    console.log('\n A area do Circulo é: '+ (raio**2*Math.PI));
}

function AreaTriangulo() {
    let lado = Number(teclado('Informe o lado do triângulo: '));
    let altura = Number(teclado('Informe a altura do triângulo: '));
    console.log('\nA área do triangulo equilatero é: ' + (lado**2*Math.sqrt(3)/4));
}

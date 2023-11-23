let carroA = {fabricante:'Ford' , modelo: 'Mustang', ano: 1969};
let carroB = {fabricante:'Porsche' , modelo: 'Macan', ano: 2023};
let carros = [carroA, carroB];

for(let carro of carros){ //for of -> ele faz um looping e mostra todos os objetos CARROS
    console.log(carro);//carro pode ser qualquer palavra
}

console.log('---------------');

for(let propriedade in carroA){
    console.log(propriedade);   //for in -> ele mostra atributos dentro de carroA
}

console.log('---------------');
for(let propriedade in carroB){
    console.log('Propriedade: ' + propriedade + ' - valor: ' + carroB[propriedade]);
}

console.log('---------------');
let nomes = ['Fred', 'Sheila', 'Sara'];

for(let nome of nomes){ // Mostra os nomes dentro do array
    console.log(nome);
}

console.log('---------------');
for(let nome in nomes){ // Mostra os numeros ID do array
    console.log(nome);
}



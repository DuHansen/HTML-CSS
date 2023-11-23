/*8 – DESENVOLVA UM PROGRAMA EM JAVASCRIPT ONDE O USUÁRIO IRÁ DIGITAR AS INFORMAÇÕES DE 5 LIVROS.
O LIVRO POSSUI OS ATRIBUTOS TÍTULO, AUTOR E ANO. O SISTEMA APÓS A INSERÇÃO DOS LIVROS PELO 
USUÁRIO, DEVERÁ:
- LISTAR OS LIVROS ORDENADOS ALFABETICAMENTE PELO TÍTULO;
- LISTAR OS LIVROS REVERSAMENTE ORDENADOS ALFABETICAMENTE PELO TÍTULO;
- LISTAR OS LIVROS ORDENADOS ALFABETICAMENTE PELO AUTOR;
- LISTAR OS LIVROS REVERSAMENTE ORDENADOS ALFABETICAMENTE PELO AUTOR;
- LISTAR OS LIVROS ORDENADOS PELO ANO DE LANÇAMENTO;
- LISTAR OS LIVROS REVERSAMENTE ORDENADOS PELO ANO DE LANÇAMENTO
*/
const teclado = require('prompt-sync')();

let  livros = [];

for(let i = 0; i<5; i++){
    let titulo = teclado('Informe o titulo do livro: ');
    let autor = teclado('Informe o autor do livro: ');
    let ano = teclado('Informe o ano: ');

    let livro = {
        titulo:titulo,
        autor:autor,
        ano: ano
    }

    livros.push(livro);
}

console.log('\nOrdenação por Titulo: ');
livros.sort((livroAtual, livroSeguinte) => livroAtual.titulo.localCompare(livroSeguinte.titulo));
console.log(livros);

console.log('\nOrdenação reversa por titulo: ');
livros.reverse((livroAtual, livroSeguinte) => livroAtual.titulo.localCompare(livroSeguinte.titulo));
console.log(livros);

console.log('\nOrdenação por Autor: ');
livros.sort((livroAtual, livroSeguinte) => livroAtual.autor.localCompare(livroSeguinte.autor));
console.log(livros);

console.log('\nOrdenação reversa por Autor: ');
livros.reverse((livroAtual, livroSeguinte) => livroAtual.autor.localCompare(livroSeguinte.autor));
console.log(livros);

console.log('\nOrdenação por Ano: ');
livros.sort((livroAtual, livroSeguinte) => livroAtual.ano - livroSeguinte.ano);
console.log(livros);

console.log('\nOrdenação reversa por ano: ');
livros.reverse((livroAtual, livroSeguinte) => livroAtual.ano - livroSeguinte.ano);
console.log(livros);
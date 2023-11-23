/*
7 – DESENVOLVA UM SISTEMA DE VENDAS EM JAVASCRIPT COM AS SEGUINTES FUNCIONALIDADES:
- ADICIONAR PRODUTO NO CARRINHO;
- REMOVER PRODUTO DO CARRINHO;
- ALTERAR A QUANTIDADE DE UM PRODUTO NO CARRINHO;
- LISTAR OS PRODUTOS DO CARRINHO;
- FINALIZAR A COMPRA;
O PROGRAMA DEVE SOLICITAR QUE O USUÁRIO ESCOLHA QUAL AÇÃO A SER REALIZADA E PEÇA AS 
INFORMAÇÕES NECESSÁRIAS. OS PRODUTOS SÃO FORMADOS POR NOME, QUANTIDADE E PREÇO. O
PROGRAMA DEVERÁ REPETIR O PROCESSO ATÉ QUE O USUÁRIO DECIDA ENCERRAR O PROGRAMA.
*/

const teclado = require('prompt-sync')();

let continuar = true;

let carrinho = [];

do {
    console.log();

    switch(opcao){
        case 1: {
            adicionarProdutoCarrinho();
        }
        case 2: {
            removerProdutoCarrinho();
        }
        case 3: {
            atualizarProdutoCarrinho();
        }
        case 4: {
            listaProdutosCarrinho();
        }
        case 5: {
            finalizarCompra();
        }
        case 6: {
            continuar = false; // Defina "continuar" como false para sair do loop
            break;
        }
        default: {
            console.log('Opção inválida.');
            break;
        }
    }
}while(continuar)

function adicionarProdutoCarrinho(nome , quantidade , preco){
    let produto = {
         nome:nome,
         quantidade:quantidade,
         preco:preco
        //JSON PARA STRING
    };
    carrinho.push(produto);
    console.log('Produto'+ nome + ' adicionado ao carrinho de compras.');
}

function removerProdutoCarrinho(nome){
    let indice = -1;
    for(let indiceProduto in carrinho){
        if(carrinho[indiceProduto].nome === nome){
            indice = indiceProduto;
        }
    }
}

function atualizarProdutoCarrinho(nome, quantidade){
    let indice = carrinho.findIndex(produto => produto.nome === nome);
    if(indice !== -1){
        carrinho[indice].quantidade = quantidade;
        console.log('Atualizar a quantidade do produto'+ nome + 'no carrinho de compras.')
    }else{
        console.log('Produto '+ nome + ' não encontrado no carrinho.');
    }
}

function listaProdutosCarrinho(){
    console.log('\nCarrinho de compras');
    carrinho.forEach(produto=> console.log(' - Produto: ' +produto.nome + 'Quantidade ' + produto.quantidade + 'preco ' + produto.preco))
}
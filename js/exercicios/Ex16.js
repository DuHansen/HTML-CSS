// splice faz a busca em lista de tarefas(array), o numero 1 é qauntidade de itens a serem removidos

const teclado = require('prompt-sync')();

let continuar = true;
let listaTarefas = [];

do {
    console.log('\nGerenciador de tarefas');
    console.log('1 - Adicionar tarefa');
    console.log('2 - Remover tarefa');
    console.log('3 - Listar tarefas');
    console.log('4 - Sair');

    let opcao = Number(teclado('Escolha uma opção: ')); // Adicione essa linha para receber a escolha do usuário

    switch (opcao) {
        case 1: {
            let tarefa = teclado('Informe a tarefa a ser adicionada: ');
            adicionarTarefa(tarefa);
            break; // Adicione essa linha para sair do switch
        }
        case 2: {
            let tarefa = teclado('Informe a tarefa a ser removida: ');
            removerTarefa(tarefa);
            break; // Adicione essa linha para sair do switch
        }
        case 3: {
            listarTarefas(); // Não é necessário fornecer um argumento aqui
            break; // Adicione essa linha para sair do switch
        }
        case 4: {
            continuar = false; // Defina "continuar" como false para sair do loop
            break;
        }
        default: {
            console.log('Opção inválida.');
            break;
        }
    }
} while (continuar);

function adicionarTarefa(tarefa) {
    if (listaTarefas.indexOf(tarefa) === -1) {
        listaTarefas.push(tarefa);
        console.log('Tarefa "' + tarefa + '" adicionada à lista.');
    } else {
        console.log('Tarefa "' + tarefa + '" já consta na lista.');
    }
}

function removerTarefa(tarefa) {
    let indice = listaTarefas.indexOf(tarefa);

    if (indice !== -1) {
        listaTarefas.splice(indice, 1);
        console.log('Tarefa "' + tarefa + '" removida da lista.');
    } else {
        console.log('Tarefa "' + tarefa + '" não encontrada na lista.');
    }
}

function listarTarefas() {
    console.log('Lista de Tarefas: ');
    listaTarefas.forEach(tarefa => console.log('- ' + tarefa));
}

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let lista = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    
    if (amigo == '') {
        alert ('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
        preencherListaAmigos();
        limparCampo();       
    }
}

function preencherListaAmigos() {
    lista.innerHTML = '';
    for (let i = 0; i<= amigos.length - 1; i++) {
        let novoAmigo = document.createElement('li');
        novoAmigo.innerHTML = amigos[i];
        lista.append(novoAmigo);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigoSorteado;
    } else {
        alert ('Por favor, adicione um nome.');
    }
}

function limparCampo() {
    let amigo = document.getElementById('amigo');
    amigo.value = '';
}
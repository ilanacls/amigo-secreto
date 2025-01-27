//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let amigos = document.getElementById('amigo').value;
    
    if (amigos == '') {
        alert ('Por favor, insira um nome.')
    } else {
        listaDeAmigos.push(amigos);
        limparCampo();
    }
}

function limparCampo() {
    amigos = document.getElementById('amigo');
    amigos.value = '';
}
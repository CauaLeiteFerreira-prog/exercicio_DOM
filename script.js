// Seleção pelo ID
let titulo = document.getElementById("titulo");
console.log("Selecionado pelo ID:", titulo);

titulo.innerText = "Novo Titulo para o nosso h1";
titulo.innerHTML = "<span style='color:blue'> Meus esportes favoritos </span>";
titulo.style.background = "black";
titulo.style.color = "white";
titulo.style.fontSize = "50px";
titulo.style.textAlign = "center";

// Seleção pela classe
let esportesClasse = document.getElementsByClassName("esporte");
console.log("Selecionado pela classe:", esportesClasse);

// Seleção pela tag
let itensLista = document.getElementsByTagName("li");
console.log("Selecionado pela tag:", itensLista);

// Seleção pelo querySelector
let primeiroEsporte = document.querySelector(".jogo");
console.log("Selecionado pelo querySelector:", primeiroEsporte);

// Seleção pelo querySelectorAll
const todosEsportes = document.querySelectorAll(".esporte");
console.log("Selecionado pelo querySelectorAll:", todosEsportes);

let lista = document.getElementById("lista");

let novoEsporte = document.createElement("li");
novoEsporte.innerText = "Natação";
lista.appendChild(novoEsporte);

let novoEsporte2 = document.createElement("li");
novoEsporte2.innerText = "Atletismo";
lista.appendChild(novoEsporte2);


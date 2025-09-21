let nombres = [];

function agregarAmigo(){
let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === ""){
        alert("Por favor, inserte un nombre");
    } else {
        nombres.push(nombreAmigo);
        document.getElementById("amigo").value = "";
    }
    actualizarListaAmigos();
}

function actualizarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    document.getElementById("listaAmigos").innerHTML = "";
    
    for(let indice = 0; indice < nombres.length; indice++){
        let elementoLista = nombres[indice];
        let li = document.createElement("li");
        li.textContent = elementoLista;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if (nombres.length === 0){
        alert("Ingrese al menos un nombre antes de realizar el sorteo.")
    }
    let indiceGanador = Math.floor(Math.random() * nombres.length);
    let nombreGanador = nombres[indiceGanador];
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = nombreGanador;
}


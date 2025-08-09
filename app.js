// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] ;

function agregarAmigo () {
    let nombreDeAmigo = document.getElementById("amigo").value.trim(); //se utiliza .trim para eliminar espacios en blanco al inicio y al final
    
    //para que no quede espacios vacios
    if (nombreDeAmigo === "") {
        alert ("Por favor, ingrese un nombre");
        return; //salir de la funcion
    }
    amigos.push(nombreDeAmigo); //agregar el nombre al array amigos
    mostrarAmigos(); //llamar a la funcion para actualizar la lista
    document.getElementById("amigo").value = ""; //limpiar el campo de entrada


}


function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiar la lista antes de mostrar los amigos

    for (let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`; //agregar cada amigo como un elemento de lista

    }
}


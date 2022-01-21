//DOM
//Permite modificar o manipular html y css desde JS
//document hace referencia al html que invoca este archivo js
//llamas el boton por medio del id obtenido del html que esta invocando este JS
let ejecutar = document.getElementById("btnEjecutar");

let nombreUser = document.getElementById("nombreUsuario");

//Se puede cambiar function() por ()=> ya que asi se puede guardar una funcion dentro de una variable
const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre");
  //inner permite cambiar el dato que esta dentro del id del html
  nombreUsuario.innerHTML= "Bienvenido: " + nombre;
  //localstorage se usa para guardar el dato en el navegador como un dato persistente
  //set es guardar y get es obtener
  localStorage.setItem("nombre", nombre);
}

//Si si hay algo en el localstorage
if (localStorage.getItem("nombre")) {
  //le concateno el dato guardado en el item nombre del localstorage
  //y con inner cambio el dato del html por el del localstorage
  nombreUsuario.innerHTML= "Bienvenido: " + localStorage.getItem("nombre");
} 

//Eventos se recomiendan que vayan al final
ejecutar.onclick = () =>{
  cambiarNombre ();
}
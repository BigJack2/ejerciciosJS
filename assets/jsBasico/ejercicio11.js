//DOM
//Permite modificar o manipular html y css desde JS
//document hace referencia al html que invoca este archivo js
//llamas el boton por medio del id obtenido del html que esta invocando este JS

let ejecutar = document.getElementById("btnEjecutar");

//Se puede cambiar function() por ()=> ya que asi se puede guardar una funcion dentro de una variable
const cambiarNombre= () => {
  let nombre=prompt("Ingresa tu nombre");
  alert ("Tu nombre es: " + nombre)
}

//Eventos se recomiendan que vayan al final
ejecutar.onclick = () =>{
  cambiarNombre ();
}
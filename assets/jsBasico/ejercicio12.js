//DOM
//
let ejecutar = document.getElementById("btnEjecutar");

let nombreUser = document.getElementById("nombreUsuario");
 
const cambiarNombre= () => {
  let nombre = prompt("Ingresa tu nombre");
  //inner permite cambiar el dato que esta dentro del id del html
  nombreUsuario.innerHTML= "Bienvenido: " + nombre;
}

//Eventos se recomiendan que vayan al final
//Se puede cambiar function() por ()=> ya que asi se puede guardar una funcion dentro de una variable
ejecutar.onclick = () =>{
  cambiarNombre ();
}
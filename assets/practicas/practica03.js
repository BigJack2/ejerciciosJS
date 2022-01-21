/**
 * en un HTML vamos a tener los siguientes datos
 * -Nombre:
 * -Edad:
 * -Direccion:
 * -Telefono:
 * -Doumento:
 * -Boton (Ingresar datos)
 * Prompt que pida la informacion.
*/

//DOM
let ejecutar = document.getElementById("btnDatos");

let nombreUser = document.getElementById("nameUser");
let edadUser = document.getElementById("ageUser");
let direccionUser = document.getElementById("dirUser");
let telefonoUser = document.getElementById("telUser");
let documentoUser = document.getElementById("docUser");

const cambiarDatos = () => {
  let nombre = prompt("Ingresa tu nombre");
  let edad = prompt("Ingresa tu edad");
  let dir = prompt("Ingresa tu direccion");
  let tel = prompt("Ingresa tu telefono");
  let doc = prompt("Ingresa tu # de documento");
  nameUser.innerHTML = "Nombre: " + nombre;
  ageUser.innerHTML = "Edad: " + edad;
  dirUser.innerHTML = "Direccion: " + dir;
  telUser.innerHTML = "Telefono: " + tel;
  docUser.innerHTML = "Documento: " + doc;
  //localstorage se usa para guardar el dato en el navegador como un dato persistente
  //set es guardar y get es obtener
  localStorage.setItem("nameUser", nombre);
  localStorage.setItem("ageUser", edad);
  localStorage.setItem("dirUser", dir);
  localStorage.setItem("telUser", tel);
  localStorage.setItem("docUser", doc);
}

//Si si hay algo en el localstorage
if (localStorage.getItem("nameUser")) {
  //le concateno el dato guardado en el item nombre del localstorage
  nameUser.innerHTML = "Nombre: " + localStorage.getItem("nameUser");
  ageUser.innerHTML = "Edad: " + localStorage.getItem("ageUser");
  dirUser.innerHTML = "Direccion: " + localStorage.getItem("dirUser");
  telUser.innerHTML = "Telefono: " + localStorage.getItem("telUser");
  docUser.innerHTML = "Documento: " + localStorage.getItem("docUser");
}

//Eventos se recomiendan que vayan al final
//Se puede cambiar function() por ()=> ya que asi se puede guardar una funcion dentro de una variable
ejecutar.onclick = () => {
  cambiarDatos();
}
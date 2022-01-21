/**
 * 1- por medio de un boton pedimos al usuario el nombre
 * 2- despues del prompt del nombre aparecen mas prompt
 * 3- Los prompt van a pedir edad, direccion, documento y telefono
 * 4- en un alert concatenado el siguiente mensaje
 * 5- Hola + nombre + edad + direccion es: + 
*/
const nombreUsuario = () => {
  let nombre = prompt("Ingrese su nombre:");
  let edad = prompt("Ingrese su edad:");
  let direccion = prompt("Ingrese su direccion:");
  let documento = prompt("Ingrese su documento:");
  let telefono = prompt("Ingrese su telefono:");

  alert(
    "Hola su nombre es: " + nombre +
    "\n su edad es: " + edad +
    "\n su direccion es: " + direccion +
    "\n su documento es: " + documento +
    "\n su telefono es: " + telefono
  );//solo funcuona +
}
/**prompt es un alert con un cuadro de texto para digitar
 * datos y guardarlo en la variable
 * Tolowercase funciona para que el texto digitado siempre quede
 * en minuscula en caso de que el usuario use mayuscula
*/
let dia = prompt("Ingrese un dia de la semana").toLowerCase();

if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "miércoles" || dia === "jueves" || dia === "viernes") {
  alert("Entre semana");
} else {

  if (dia === "sabado" || dia === "sábado" || dia === "domingo") {
    alert("Fin de semana");
  } else {
    alert("Por favor ingrese solo dia de la semana");
  }

}
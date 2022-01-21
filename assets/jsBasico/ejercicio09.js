/**
 * SWITCH CASE
 * No compara datos con operadores logicos ==, ><
 * solo valida un caso de igual, si es o no es
 * se usa aveces para no usar if anidados
*/
let ciudad = prompt("Ingresa tu ciudad");

switch (ciudad) {
  case "bogota":
    alert("Ciudad frio");
    break;

  case "armenia":
    alert("Ciudad templado");
    break;

  case "cali":
    alert("Ciudad caliente");
    break;

  default:
    alert("catalogo Bloqueado")
    break;
}
/* Variables en JavaScript */

// Let es un tipo de variable que no permite sobrrescribir su valor cuando esta se vuelve a declarar.
//Let permite que se declare una variable tipo var con el nismo nombre

let nombre = "Sebastian";

//Si declaras nuevamente su variable marcara error, por ende deberas borrarla.
let nombre = "Jhon";

//Si omites let esta variable sera interpretada como var y JS permite que existan dos variables del mismo nombre pero difernete tipado.
nombre = "Sebastian";

//Declara una nueva variable para que no haya interferencia.
let nombreusuario = "Pepe";



console.log(nombre, nombreusuario);
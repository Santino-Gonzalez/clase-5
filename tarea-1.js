//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $salarioAnual = document.querySelector("#salarioAnual");
const $salarioMensual = document.querySelector("#salarioMensual");

function calcularSalarioMensual(salarioAnual){
  return salarioAnual / 12;
}

document.querySelector("#botonCalcular").onclick = function(){
  $salarioMensual.value = calcularSalarioMensual($salarioAnual.value);
  return false;
}

//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

function calcularSalarioMensual(salarioAnual){
    const mesesDelAnio = 12
    return salarioAnual / mesesDelAnio
  }
  
  const $calcularSalarioMensual = document.querySelector("#calcular-salario-mensual")
  
  $calcularSalarioMensual.onclick = function(){
    const salarioAnual = Number(document.querySelector("#salario-anual").value)
    const salarioMensual = calcularSalarioMensual(salarioAnual)
    document.querySelector("#salario-mensual").value = salarioMensual
    
    return false
  }
  
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector("#botonCalcular").onclick = function (){
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;

    for (let i = 1; i < 6; i++) {
        totalHoras = totalHoras + Number(document.querySelector(`#clase${i}Horas`).value);
        totalMinutos = totalMinutos + Number(document.querySelector(`#clase${i}Minutos`).value);
        totalSegundos = totalSegundos + Number(document.querySelector(`#clase${i}Segundos`).value);
    }

    if(totalSegundos > 60){
        totalMinutos = totalMinutos + Math.floor(totalSegundos / 60);
        totalSegundos = totalSegundos % 60;
    }

    if(totalMinutos > 60){
        totalHoras = totalHoras + Math.floor(totalMinutos / 60);
        totalMinutos = totalMinutos % 60;
    }

    document.querySelector("#tiempoTotal").innerHTML = `${totalHoras}hrs ${totalMinutos}mins ${totalSegundos}segs`
    
    event.preventDefault();
}

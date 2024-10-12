//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $primerNombre = document.querySelector("#primerNombre");
const $segundoNombre = document.querySelector("#segundoNombre");
const $apellidos = document.querySelector("#apellidos");
const $edad = document.querySelector("#edad");

const $bienvenida = document.querySelector("#bienvenida");
const $datosUsuario = document.querySelector("#datosUsuario");


document.querySelector("#botonIngresar").onclick = function(){
    $bienvenida.innerHTML = `Bienvenido, ${$primerNombre.value}`
    $datosUsuario.innerHTML = `El nombre del usuario es: ${$primerNombre.value} ${$segundoNombre.value} ${$apellidos.value} y tiene ${$edad.value} años.`;
    event.preventDefault();
}


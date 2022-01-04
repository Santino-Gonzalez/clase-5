const $buttonIngresarInformacion = document.querySelector("#enter-user-information")
const $saludo = document.querySelector("h1")

$buttonIngresarInformacion.onclick = function(){
    const $firstName = document.querySelector("#first-name").value
    const $secondName = document.querySelector("#second-name").value
    const $surname = document.querySelector("#surname").value
    const $age = document.querySelector("#age").value
    $saludo.textContent = `Bienvenido ${$firstName} ${$secondName} ${$surname}, tu edad es de ${$age} años`
    return false
}
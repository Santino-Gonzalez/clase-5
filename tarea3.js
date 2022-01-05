const $calculateTotalTime = document.querySelector("#calculate-total-time")
const $totalTimeText = document.querySelector("h1")

function calculateTotalHours (){
    const hoursClass1 = Number(document.querySelector("#first-class-hours").value)
    const hoursClass2 = Number(document.querySelector("#second-class-hours").value)
    const hoursClass3 = Number(document.querySelector("#third-class-hours").value)
    const hoursClass4 = Number(document.querySelector("#fourth-class-hours").value)
    const hoursClass5 = Number(document.querySelector("#fifth-class-hours").value)
    let hour = hoursClass1 + hoursClass2 + hoursClass3 + hoursClass4 + hoursClass5
    return hour
}
function calculateTotalMinutes (){
    const minutesClass1 = Number(document.querySelector("#first-class-minutes").value)
    const minutesClass2 = Number(document.querySelector("#second-class-minutes").value)
    const minutesClass3 = Number(document.querySelector("#third-class-minutes").value)
    const minutesClass4 = Number(document.querySelector("#fourth-class-minutes").value)
    const minutesClass5 = Number(document.querySelector("#fifth-class-minutes").value)
    let minutes = minutesClass1 + minutesClass2 + minutesClass3 + minutesClass4 + minutesClass5
    return minutes
}
function calculateTotalSeconds (){
    const secondsClass1 = Number(document.querySelector("#first-class-seconds").value)
    const secondsClass2 = Number(document.querySelector("#second-class-seconds").value)
    const secondsClass3 = Number(document.querySelector("#third-class-seconds").value)
    const secondsClass4 = Number(document.querySelector("#fourth-class-seconds").value)
    const secondsClass5 = Number(document.querySelector("#fifth-class-seconds").value)
    let seconds = secondsClass1 + secondsClass2 + secondsClass3 + secondsClass4 + secondsClass5
    return seconds
}

$calculateTotalTime.onclick = function(){
    let totalSeconds = calculateTotalSeconds()
    let totalMinutes  = calculateTotalMinutes()
    let totalHour = calculateTotalHours()

    if(totalSeconds >= 60){
        while(totalSeconds >= 60){
            totalSeconds = totalSeconds - 60
            totalMinutes++
        }
    }

    if(totalMinutes >= 60){
        while(totalMinutes >= 60){
            totalMinutes = totalMinutes - 60
            totalHour++
        }
    }

    $totalTimeText.textContent = `El tiempo total es de ${totalHour}hs ${totalMinutes}mins ${totalSeconds}seg`
}

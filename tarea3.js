const $calculateTotalTime = document.querySelector("#calculate-total-time")
const $totalTimeText = document.querySelector("h1")

function calculateTotalHours (){
    const hoursClass1 = Number(document.querySelector("#first-class-hours").value)
    const hoursClass2 = Number(document.querySelector("#second-class-hours").value)
    const hoursClass3 = Number(document.querySelector("#third-class-hours").value)
    const hoursClass4 = Number(document.querySelector("#fourth-class-hours").value)
    const hoursClass5 = Number(document.querySelector("#fifth-class-hours").value)
    hoursClass1 + hoursClass2 + hoursClass3 + hoursClass4 + hoursClass5
}
function calculateTotalMinutes (){
    const minutesClass1 = Number(document.querySelector("#first-class-minutes").value)
    const minutesClass2 = Number(document.querySelector("#second-class-minutes").value)
    const minutesClass3 = Number(document.querySelector("#third-class-minutes").value)
    const minutesClass4 = Number(document.querySelector("#fourth-class-minutes").value)
    const minutesClass5 = Number(document.querySelector("#fifth-class-minutes").value)
    minutesClass1 + minutesClass2 + minutesClass3 + minutesClass4 + minutesClass5
}
function calculateTotalSeconds (){
    const secondsClass1 = Number(document.querySelector("#first-class-seconds").value)
    const secondsClass2 = Number(document.querySelector("#second-class-seconds").value)
    const secondsClass3 = Number(document.querySelector("#third-class-seconds").value)
    const secondsClass4 = Number(document.querySelector("#fourth-class-seconds").value)
    const secondsClass5 = Number(document.querySelector("#fifth-class-seconds").value)
    secondsClass1 + secondsClass2 + secondsClass3 + secondsClass4 + secondsClass5
}

$calculateTotalTime.onclick = function(){
    let totalSeconds = calculateTotalSeconds()
    
    if(totalSeconds >= 60){
        for (let i = totalSeconds; i >= 60; i-= 60){
            totalSeconds = i
            minutes++
        }
    }

    let totalMinutes  = calculateTotalMinutes()

    if(totalMinutes >= 60){
        for(let i = totalMinutes; i>60; i-=60){
            totalMinutes = i
            hour++
        }
    }

    let totalHour = calculateTotalHours()

    $totalTimeText.textContent = `El tiempo total es de ${totalHour}hs ${totalMinutes}mins ${totalSeconds}seg`
}

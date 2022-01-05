
const $calculateTotalTime = document.querySelector("#calculate-total-time")
const $totalTimeText = document.querySelector("strong")

$calculateTotalTime.onclick = function(){
    const hours = document.querySelectorAll(".hours")
    const minutes = document.querySelectorAll(".minutes")
    const seconds = document.querySelectorAll (".seconds")
    let totalHours = calculateTime(hours)
    let totalMinutes = calculateTime(minutes)
    let totalSeconds = calculateTime(seconds)

    function calculateTime(time) {
    let finalTime = 0;
    for (let i = 0; i < time.length; i++) {
      finalTime += Number(time[i].value);
    }
    return finalTime;
  }

    if(totalSeconds >= 60){
        while(totalSeconds >= 60){
            totalSeconds = totalSeconds - 60
            totalMinutes++
        }
    }

    if(totalMinutes >= 60){
        while(totalMinutes >= 60){
            totalMinutes = totalMinutes - 60
            totalHours++
        }
    }


    $totalTimeText.textContent = `El tiempo total es de ${totalHours}hs ${totalMinutes}mins ${totalSeconds}seg`
}

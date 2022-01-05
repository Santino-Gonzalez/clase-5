const numbers = document.querySelectorAll("li")
const textAverageNumber = document.querySelector("#average-number")
const textSmallestNumber = document.querySelector("#smallest-number")
const textBiggerNumber = document.querySelector("#bigger-number")
const textMostFrequentNumber = document.querySelector("#most-frequent-number")

function convertNumbersToArray(listOfNumbers){
    let array = []
    for(let i = 0; i <= listOfNumbers.length; i++){
        array.push(Number(listOfNumbers[i]))
    }
    return array
}

let finalArray = convertNumbersToArray(numbers)


function calculateAverageOfArray(array){
    let average = 0
    for(let i = 0; i <= array.length; i++){
        average += Number()
    }
    return average / array.length
}

let averageNumber = calculateAverageOfArray(finalArray)


function calculateSmallestNumber(array){
    let smallNumber = array[0]
    for(let i = 0; i <= array.length; i++){
        if(array[i] < smallNumber){
            smallNumber = array[i]
        }
    }
    return smallNumber
}

let smallestNumber = calculateSmallestNumber(finalArray)

function calculateBiggestNumber(array){
    let bigNumber = array[0]
    for(let i = 0; i <= array.length; i++){
        if(array[i] < bigNumber){
            bigNumber = array[i]
        }
    }
    return bigNumber
}

let biggestNumber = calculateBiggestNumber(finalArray)

function calculateMostRepeatedNumber(array){
    let higherReps = 1
    let appearances = 0
    let moreRepeated
    for(let i = 0; i <= array.length; i++){
        for(let j = 0; j <= array.length; j++){
            if(array[i] === array[j]){
                appearances++
            }
            if(appearances > higherReps){
                higherReps = appearances
                moreRepeated = array[i]
            }
        }
        appearances = 0
    }
    return moreRepeated
}

let mostRepeatedNumber = calculateMostRepeatedNumber(finalArray)

textAverageNumber.textContent = `El numero promedio es ${averageNumber}`
textSmallestNumber.textContent = `El numero mas pequeño es ${smallestNumber}`
textBiggerNumber.textContent = `El numero mas grande es ${biggestNumber}`
textMostFrequentNumber.textContent = `El numero que mas se repite es ${mostRepeatedNumber}`


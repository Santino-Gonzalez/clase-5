const array1 = [4, 1, 73, 6, 9]
const array2 = [5, 6, 53, 4, 7]
const array3 = [4, 1, 7, 6, 20]
const array4 = [5, 9, 3, 1, 3]

document.querySelector("#array-1").innerText = array1
document.querySelector("#array-2").innerText = array2
document.querySelector("#array-3").innerText = array3
document.querySelector("#array-4").innerText = array4

const totalArray = [...array1, ...array2, ...array3, ...array4]

let smallestNumber = Math.min(...totalArray)
let biggestNumber = Math.max(...totalArray)
let average = 0

for(let i = 0; i <= totalArray.length; i++){
    average = average + totalArray[i]
}

average = average / totalArray.length

document.querySelector("#smallest-number").innerText = `El numero mas pequeño es ${smallestNumber}`
document.querySelector("#bigger-number").innerText = `El numero mas grande es ${biggestNumber}`
document.querySelector("#average-number").innerText = `El numero promedio es ${average}`








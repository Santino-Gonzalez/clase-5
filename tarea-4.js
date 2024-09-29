//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let nums = document.querySelectorAll(".nums");
let arrayNums = [];

let promedio;
let minimo;
let maximo;
let moda;

let textoPromedio = document.querySelector("#promedio");
let textoMinimo = document.querySelector("#minimo");
let textoMaximo = document.querySelector("#maximo");
let textoModa = document.querySelector("#moda");


for (let i = 0; i < nums.length; i++) {
    arrayNums.push(Number(nums[i].innerHTML));
}

function calcularPromedio(nums) {

    let suma = 0;

    for (let i = 0; i < nums.length; i++) {
        suma = suma + nums[i];
    }

    return suma / nums.length;
}

function obtenerMinimo(nums) {

    let minimo = 0;

    for (let i = 0; i < nums.length; i++) {
        if (minimo == 0) {
            minimo = nums[i];
        } else if (nums[i] < minimo) {
            minimo = nums[i];
        }
    }

    return minimo;
}

function obtenerMaximo(nums) {

    let maximo = 0;

    for (let i = 0; i < nums.length; i++) {
        if (maximo == 0) {
            maximo = nums[i];
        } else if (nums[i] > maximo) {
            maximo = nums[i];
        }
    }

    return maximo;
}

function obtenerModa(nums){

    let numModa;
    let maxRepeticiones = 0;
    let actualRepeticones;

    for (let i = 0; i < nums.length; i++) {
        actualRepeticones = 0;

        for (let j = 0; j < nums.length; j++) {
            if(nums[i] == nums[j]){
                actualRepeticones++;
            }
        }

        if(actualRepeticones > maxRepeticiones || maxRepeticiones == 0){
            maxRepeticiones = actualRepeticones;
            numModa = nums[i];
        }
        
    }

    return numModa;
}

textoPromedio.innerHTML = `El promedio es ${calcularPromedio(arrayNums)}`;
textoMinimo.innerHTML = `El minimo es ${obtenerMinimo(arrayNums)}`;
textoMaximo.innerHTML = `El maximo es ${obtenerMaximo(arrayNums)}`;
textoModa.innerHTML = `La moda es ${obtenerModa(arrayNums)}`;

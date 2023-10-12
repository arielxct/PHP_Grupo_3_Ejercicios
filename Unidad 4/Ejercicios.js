// 22. Se le solicita al usuario que ingrese 3 números. Realice un programa para informar 
// si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno
function FizzBuzz() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let number3 = parseInt(document.getElementById('number3').value);
    let sum = number1 + number2 + number3;

    let result = ' ';
    if (sum % 5 == 0 && sum % 3 == 0) {
        result = "El numero " + sum + " es multiplo de 3 y 5";
    } else if (sum % 3 == 0) {
        result = "El numero " + sum + " es multiplo de 3";
    }
    else if (sum % 5 == 0) {
        result = "El numero " + sum + " es multiplo de ";
    } else {
        result = "El numero " + sum + " no es multiplo ni de 3 ni de 5";
    }
    document.getElementById('result').innerHTML = result;
}

// 23. Se le solicita al usuario que ingrese los extremos de un rango numérico y una 
// cantidad de valores desconocidos.
// Realice un programa para informar si cada número está dentro del rango.
// Si está en rango, informar si el número es par.
// Si no está dentro del rango, informar si es número es impar.
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números 
// enteros.

//Esto todavía no lo logré entender, más tarde le busco la vuelta

// function parImpar() {
//     let number1 = parseInt(document.getElementById('number1ParImpar').value);
//     let number2 = parseInt(document.getElementById('number2ParImpar').value);
//     let number3 = parseInt(document.getElementById('number3ParImpar').value);

//     let resultado = " ";
//     if (number1 - number2 < 5) { //Validamos que el principio y final del rango ingresado, tengan 5 numeros enteros de diferencia.
//         resultado += "El rango está mal, recuerda que debe haber una diferencia de 5 numeros entre el princio y fin."
//     }else{
//         for (let i = 0; i <= number3; i++) {
//     }
//     console.log(resultado)
//     document.getElementById('resultParImpar').innerHTML = resultado;
//     }
// }

// 24. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice 
// un programa para calcular e informar cada operación deseada entre los dos números. 
// Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben ser 
// validados.
function calculator(){
    let number1 = parseInt(document.getElementById('number1calc').value);
    let number2 = parseInt(document.getElementById('number2calc').value);
    let operator = (document.getElementById('operator').value);
    let result = 0;

    if(isNaN(number1) || isNaN(number2)){
        alert("Ingrese valores validos");
    }
    
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if(number2 == 0){
                alert("No se puede dividir por 0")
            }
            result = number1 / number2;
            break;
        default:
            alert("Ingrese un operador valido (' + ', ' - ', ' * ' o ' / '")
            break;
    }
    document.getElementById('resultcalculator').innerHTML = "El resultado es: " + result;
}
function clearCalculator(){
    document.getElementById('number1calc').value = "";
    document.getElementById('operator').value = "";
    document.getElementById('number2calc').value = "";
}

// 25. Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una 
// comisión. Se desconoce la cantidad de alumnos. Realice el algoritmo para informar:
//  El porcentaje de alumnos aprobados (nota igual o superior a 4).
//  El porcentaje de alumnos desaprobados (nota inferior a 4).
//  El promedio de las notas.
// Tenga en cuenta que solamente las notas pueden ir del 1 al 10.

//Por el momento los promedios dan mal el resultado.
let notas = [];
let totalAlumnos= 0;
let totalNotas = 0;
let aprobados = 0;
let desaprobados = 0;
let sumaNotas = 0;
function studentsAverage(){
    let nota = document.getElementById('grade').value;

    if(isNaN(nota) || nota > 10 || nota < 1){
        alert("Ingrese un valor valido");
    }else{
        notas.push(nota);
        totalAlumnos++;
    }
    for(let i = 0; i < notas.length; i++){
        sumaNotas += notas[i];
        if(nota >= 4){
            aprobados++;
        }else{
            desaprobados++;
        }
    }

    console.log(totalAlumnos);
    console.log(notas);
    
    document.getElementById('grade').value = "";
    document.getElementById('resultadoAprobados').innerHTML = "El total de aprobados es del: " + ((aprobados / totalAlumnos) * 100)+"%";
    document.getElementById('resultadoDesaprobados').innerHTML = "El total de desaprobados es del: " + ((desaprobados / totalAlumnos) * 100)+"%";
    document.getElementById('resultadoPromedio').innerHTML = "El promedio de las notas generales es de: " + ((sumaNotas / totalAlumnos)).toFixed(2)+"%";
}
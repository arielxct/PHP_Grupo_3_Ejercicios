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


function parImpar() {
    let number1 = parseInt(document.getElementById('number1ParImpar').value);
    let number2 = parseInt(document.getElementById('number2ParImpar').value);
    let number3 = parseInt(document.getElementById('number3ParImpar').value);

    let resultado = "";
    if(number3 >= number1 && number3 <= number2 && number2 - number1 >= 5){
        if(number3 % 2 == 0){
            resultado="El numero esta dentro del rango y es par";
        }else{
            resultado="El numero esta dentro del rango y es impar";
        }
    }else if(number3 < number1 || number3 > number2){
        resultado="El numero a evaluar no esta dentro del rango informado";
    }else if(number2 - number1 < 5){
        resultado="El rango debe tener una diferencia minima de 5 numeros enteros";
    }
    console.log(resultado)
    document.getElementById('resultParImpar').innerHTML = resultado;
}

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


function studentsAverage(){
    let totalAlumnos= 0;
    let aprobados = 0;
    let desaprobados = 0;
    let sumaNotas = 0;


    let nota = 0;
    while(nota !== 99){
        nota = parseInt(prompt("Ingrese la nota (o -1 para finalizar):"));
        if (nota === -1) {
            break; // Salir del bucle si se ingresa -1
        }
        //Valida las notas
        if(isNaN(nota) || nota > 10 || nota < 1){
            alert("Ingrese un valor valido");
        }else{
            //Si son validas, se meten al array, incrementa un alumno y valida la nota.
            totalAlumnos++;
            if (nota >= 4) {
                aprobados++;
            } else {
                desaprobados++;
            }
            //Para el promedio, se tienen que ir acumulando las notas.
                sumaNotas += nota;
        }
    }
    document.getElementById('resultadoAprobados').innerHTML = "El total de aprobados es del: " + ((aprobados / totalAlumnos) * 100).toFixed(2)+"%";
    document.getElementById('resultadoDesaprobados').innerHTML = "El total de desaprobados es del: " + ((desaprobados / totalAlumnos) * 100).toFixed(2)+"%";
    document.getElementById('resultadoPromedio').innerHTML = "El promedio de las notas generales es de: " + ((sumaNotas / totalAlumnos));
}

// 26. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice 
// un programa para calcular e informar:
// a. La sumatoria de los valores ingresados.
// b. El menor valor ingresado.
// c. El mayor valor ingresado
let numbers = [];
function cargarNumerosSumatoria(){
    let number = parseInt(document.getElementById('numberInput').value);
    numbers.push(number);
    alert("Valor ingresado con exito.")
    document.getElementById('numberInput').value = '';
}

function sumatoria(){
    let sum = 0;
    let biggest = -Infinity;
    let smallest = Infinity;
    
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        if(numbers[i] < smallest){
            smallest = numbers[i];
        }
        if(numbers[i] > biggest){
            biggest = numbers[i];
        }
    }
    document.getElementById("resultadoSum").innerHTML = "Sumatoria de valores ingresados: " + sum
    document.getElementById("resultadoSumSmallest").innerHTML = "Menor valor ingresado: " + smallest
    document.getElementById("resultadoSumBiggest").innerHTML = "Mayor valor ingresado: " + biggest
}



// 27. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre, 
//     M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular 
//     e informar:
//     a. El porcentaje de mujeres mayores a 25 años.
//      b. El porcentaje de hombres menores de 18 años.
//      c. El promedio de edad de las mujeres.
//      d. El promedio de altura de los hombres.
//      e. La menor edad ingresada.
//      f. La mayor altura ingresad
let personas = [[]];

function cargarPersonas(){
    let sexo = prompt("Ingrese el sexo (H: Hombre, M: Mujer):").toUpperCase;

    if(sexo != "M" || sexo != "H"){
        alert("Ingrese el sexo correcto - H : Hombre o M : Mujer");
    }
    let edad = parseInt(prompt("Ingrese la edad:"));
    let altura = parseInt(prompt("Ingrese la altura en centímetros:"));

    let persona = [sexo, edad, altura];

    personas.push(persona);

}
function procesarEncuesta(){
    let mujeresMayores = 0;
    let hombresMenores = 0;
    let totalMujeres = 0;
    let totalEdadMujeres = 0;
    let totalHombres = 0;
    let menorEdad = 100;
    let mayorAltura = -1;
    let totalAlturaHombres = 0;

    let persona = [];
    let sexo = "";
    let edad = 0;
    let altura = 0;



    for(let i = 0; i < personas.length; i++){
        persona = personas[i];
        sexo = persona[0];
        edad = persona[1];
        altura = persona[2];

        if(sexo == "M"){
            totalMujeres++;
            totalEdadMujeres += edad;
            if(edad > 25){
                mujeresMayores++;
            }
        }
        if(sexo == "H"){
            totalHombres++;
            totalAlturaHombres += altura;
        }
        if(edad < 18){
            hombresMenores++
        }
        //La menor edad registrada.
        if(menorEdad > edad){
            menorEdad = edad;
        }
        //La mayor altura registrada.
        if(altura > mayorAltura){
            mayorAltura = altura;
        }
    }
    let porcentajeMujeresMayores = ((mujeresMayores / totalMujeres) * 100).toFixed(2);
    let porcentajeHombresMenores = ((hombresMenores / totalHombres) * 100).toFixed(2);
    let promedioEdadMujeres = (totalEdadMujeres / totalMujeres);
    let promedioAlturaHombres = (totalAlturaHombres / totalHombres);

    console.log("La cantidad de mujeres mayores a 25 años es: " + porcentajeMujeresMayores + "%");
    console.log("La cantidad de hombres menores de 18 años es: " + porcentajeHombresMenores + "%");
    console.log("El promedio de edad de las mujeres es: " + promedioEdadMujeres);
    console.log("El promedio de altura de los hombres es: " + promedioAlturaHombres);
    console.log("La menor edad ingresada es: " + menorEdad);
    console.log("La mayor altura ingresada es: " + mayorAltura);
}
/*
Unidad 3
/*
15. Se le solicita al usuario que ingrese un número. Realice un programa para informar
si el número es cero, par o impar.
*/
let numero1 = parseInt(prompt("Ingrese un numero"));
if (numero1 == 0) {
    alert("El numero es cero");
} else if (numero1 % 2 == 0) {
    alert("El numero es par");
} else {
    alert("El numero es impar");
}

/*
16. Se le solicita al usuario que ingrese un número. Realice un programa para informar
si el número es múltiplo de 3.
*/
let numero2 = parseInt(prompt("Ingrese un numero"));
if (numero2 % 3 == 0) {
    alert("El numero es multiplo de 3");
} else {
    alert("El numero no es multiplo de 3");
}

/*
17. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si
el valor ingresado es una vocal.
*/
let letra = prompt("Ingrese una letra");
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    alert("La letra es una vocal");
} else {
    alert("La letra no es una vocal");
}

/*
18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un
número. Realice un programa para informar si el número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si es número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números
enteros.
*/
let numeroBase = parseInt(prompt("Ingrese el numero mas bajo del rango a evaluar"));
let numeroTope = parseInt(prompt("Ingrese el numero mas alto del rango a evaluar"));
let numero3 = parseInt(prompt("Ingrese el numero a evaluar"));

if(numero3 >= numeroBase && numero3 <= numeroTope && numeroTope - numeroBase >= 5){
    if(numero3 % 2 == 0){
        alert("El numero esta dentro del rango y es par");
    }else{
        alert("El numero esta dentro del rango y es impar");
    }
}
else if(numero3 < numeroBase || numero3 > numeroTope){
    alert("El numero a evaluar no esta dentro del rango informado");
}
else if(numeroTope - numeroBase < 5){
    alert("El rango debe tener una diferencia minima de 5 numeros enteros");
}

/*
19. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice
un programa para calcular e informar la operación solicitada entre ambos números.
*/
let numero4 = parseInt(prompt("Ingrese el primer numero"));
let numero5 = parseInt(prompt("Ingrese el segundo numero"));
let operador = prompt("Ingrese el operador: +, -, *, /");

switch (operador) {
    case "+":
        alert(numero4 + numero5);
        break;
    case "-":
        alert(numero4 - numero5);
        break;
    case "*":
        alert(numero4 * numero5);
        break;
    case "/":
        alert(numero4 / numero5);
        break;
    default:
        alert("El operador ingresado no es valido");
        break;
}

/*
20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el
algoritmo para informar si el triángulo es equilátero, isósceles o escaleno.
*/

let lado1 = parseFloat(prompt("Ingrese el primer lado del triangulo"));
let lado2 = parseFloat(prompt("Ingrese el segundo lado del triangulo"));
let lado3 = parseFloat(prompt("Ingrese el tercer lado del triangulo"));

if(lado1 == lado2 && lado2 == lado3){
    alert("El triangulo es equilatero");
}
else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    alert("El triangulo es isosceles");
}
else{
    alert("El triangulo es escaleno");
}

/*
21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al
usuario que ingrese la categoría a la que pertenece que define el sueldo básico
mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las
horas extras. Se sabe que:

a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500
más.
b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000
más.
Realice un programa para calcular e informar el sueldo mensual del empleado,
indicando si su sueldo supera o no los u$s 4000.
*/

let categoria = parseInt(prompt("Ingrese la categoria del empleado: 1, 2 o 3"));
let horasExtras = parseInt(prompt("Ingrese la cantidad de horas extras trabajadas"));

let sueldo = 0;
let bono = 0;

switch (categoria) {
    case 1:
        sueldo = 2000;
        if(horasExtras > 20){
            bono = 500;
        }
        alert("El sueldo del empleado es: $" + (sueldo + bono));
        break;
    case 2:
        sueldo = 3000;
        alert("El sueldo del empleado es: $" + sueldo);
        break;
    case 3:
        sueldo = 4000;
        if(horasExtras > 30){
            bono = 1000;
        }
        alert("El sueldo del empleado es: $" + (sueldo + bono));
        break;
    default:
        alert("La categoria ingresada no es valida");
        break;
}

//======================================================================
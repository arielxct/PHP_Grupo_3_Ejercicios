/*
Unidad 2
*/
/*
9. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un
programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido
del usuario.
*/

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
console.log("Bienvenido " + nombre + " " + apellido + "!")
/*
10. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa
para calcular e informar el perímetro y el área del círculo. Se considerará para este
ejercicio que el valor de PI será 3.1416.
*/
const PI = 3.1416;
let diametro = prompt("Ingrese el diametro del circulo");
let radio = diametro / 2;
let perimetro = radio * PI * 2;
let area = PI * (radio * radio);

console.log("El perimetro del circulo es: " + perimetro + " y su area es: " + area);

/*
11. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e
informar la suma y el promedio.
*/
let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));
let numero3 = parseFloat(prompt("Ingrese el tercer numero"));
let numero4 = parseFloat(prompt("Ingrese el cuarto numero"));

let suma = numero1 + numero2 + numero3 + numero4;
let promedio = suma / 4;

console.log("La suma de los numeros es: " + suma + " y el promedio es: " + promedio);

/*
12. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
ingrese el valor de la hora y la cantidad de horas trabajadas en el mes. Realice un
programa para calcular e informar el sueldo mensual del empleado.
*/
let valorHora = parseFloat(prompt("Ingrese el valor de la hora"));
let horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes"));

let sueldo = valorHora * horasTrabajadas;

/*
13. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de
antigüedad en la empresa. Realice un programa para calcular e informar el sueldo
mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al
15% del sueldo por año de antigüedad.
*/

let valorPorHora = parseFloat(prompt("Ingrese el valor de la hora trabajada"));
let hsTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes"));
let antiguedad = parseFloat(prompt("Ingrese los años de antiguedad"));

let bono = (valorPorHora * antiguedad) * 0.15;
let sueldoTotal = (valorPorHora * hsTrabajadas) + bono;

/*
14. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le
solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los
años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro
vendido. Realice un programa para calcular e informar el sueldo mensual del
empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más
caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y
otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo
final, calcular e informar el valor promedio de la hora del empleado.
*/

let valorHoraTrabajo = parseFloat(prompt("Ingrese el valor de la hora de trabajo"));
let horasTrabajadasMes = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes"));
let sueldoMensual = valorHoraTrabajo * horasTrabajadasMes;
let antiguedadTrabajador = parseFloat(prompt("Ingrese los años de antiguedad"));
let segurosVendidos = parseInt(prompt("Ingrese la cantidad de seguros vendidos"));
let valorSeguroMasCaro = parseFloat(prompt("Ingrese el valor del seguro mas caro vendido"));

let bonoSeguroMasCaro = valorSeguroMasCaro * 0.5;
let bonoSegurosVendidos = (sueldoMensual* 0.25) * segurosVendidos;
let bonoAntiguedad = (sueldoMensual * 0.15) * antiguedadTrabajador;


let sueldoFinal = sueldoMensual + bonoSeguroMasCaro + bonoSegurosVendidos + bonoAntiguedad;

//=================================================================================


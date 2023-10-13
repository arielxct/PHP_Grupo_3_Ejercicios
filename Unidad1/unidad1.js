/*
Guía de ejercicios
Consignas para la realización y entrega de la guía de ejercicios:
● Todos los ejercicios deben ser realizados siguiendo las pautas que indique cada 
unidad.
● Para la entrega de la presente guía, todos los ejercicios deben ser entregados 
mediante Link de Github y compartidos en el foro del aula virtual
Unidad 1
Resolver los ejercicios utilizando variables y operadores. Para el ingreso y egreso de 
información por el momento con datos propios. 
1.Realice un algoritmo que muestre el nombre y apellido de un usuario
2. Realice un algoritmo que muestre el promedio de 3 notas
3. Realice el algoritmo para calcular e informar el perímetro del triángulo.
4. Realice el algoritmo para calcular e informar el perímetro y el área del cuadrado.
5. Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo.
6. Realice el algoritmo para calcular e informar el resto de la división entera entre los 
valores.
7. Realice el algoritmo que arme y muestre el mensaje "Bienvenido", seguido del 
nombre y apellido del usuario.
8. Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se 
considerará para este ejercicio que el valor de PI será 3.1416.
*/
// ===================================================================================

// 1.Realice un algoritmo que muestre el nombre y apellido de un usuario

var nombre = "Ariel";
var apellido = "Campos Tula"

console.log("Mi nombre es : " + nombre + " y mi apellido: " + apellido);

// 2. Realice un algoritmo que muestre el promedio de 3 notas

var nota1 = 6;
var nota2 = 7;
var nota3 = 9;

promedio = (nota1+nota2+nota3)/3;

console.log ("El promedio de las tres notas es : " + promedio);

// 3. Realice el algoritmo para calcular e informar el perímetro del triángulo.

var lado1 = 20;
var lado2 = 25;
var lado3 = 30;

perimetro = lado1 + lado2 + lado3

console.log ( "Elperimero del triangulo es: " + perimetro);

// 4. Realice el algoritmo para calcular e informar el perímetro y el área del cuadrado.

var ladoCuadrado = 20;

perimetroCuadrado = ladoCuadrado*4;
areaDelCuadrado = ladoCuadrado*ladoCuadrado;

console.log ( "El perimero del cuadrado es: " + perimetroCuadrado + " y su area es: "+ areaDelCuadrado);

// 5. Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo.

var lado1Rectangulo = 10;
var  lado2Rectangulo = 14
perimetroRectangulo = (lado1Rectangulo*2) + (lado2Rectangulo*2);
areaDelRectangulo = lado1Rectangulo * lado2Rectangulo;

console.log( "El perimero delrectangulo es: " + perimetroRectangulo + " y sy area es: " + areaDelRectangulo);

//  6. Realice el algoritmo para calcular e informar el resto de la división entera entre los 
// valores.

var valor1 = 20;
var valor2 = 6;
var resultadoDivision = valor1 / valor2;
var restoDivision = valor1 % valor2;

console.log ( "El resultado de la división entre " + valor1 + " y " + valor2 + " es: " + resultadoDivision + " y su resto es: " + restoDivision);

// 7. Realice el algoritmo que arme y muestre el mensaje "Bienvenido", seguido del 
// nombre y apellido del usuario.

var nombre = "Roger";
var apellido = "Federer"

console.log("Bienvenido : " + nombre + " " + apellido + "!");

// mas bienvenida
alert("Bienvenido : " + nombre + " " + apellido + "!")


// 8. Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se 
// considerará para este ejercicio que el valor de PI será 3.1416.

var  radioCircunferencia = 10;
 var perimetroCirculo = (radioCircunferencia * 3.1416*2);
 var areaCirculo = (3.1416 * (radioCircunferencia * radioCircunferencia));

 console.log("El perimetro de la circunferencia es: " + perimetroCirculo + " y su area es: " + areaCirculo);












"use strict"
// alert("Hello world!");
//declarar variables en js es con
// var=variable global
// let=variable 
// const=constante
// let y const son variables con alcance(scope{)}
// let edad=prompt("Introduce tu edad!");
// // number(edad);
// console.log(edad+5);
// console.log(typeof(edad+5));
// console.log(nombre);
// Document.qwrite(nombre);

// //tipos de datos

// // let texto="Mi nombre es Monica 'otro texto'";
// // // console.log(texto);
// // let numero=4;
//DATOS PRIMITIVOS
// let boolean=true;
//String (numero)
//number (numero) float o integer (decial o entero)

// let menor=(10==5);
// console.log(menor);

// let fecha= new Date();
// //operadores aritmeticos(basicos)
// let suma=1+2;
// let resta=1-2;
// let multiplicacion=1*2;
// let division=1/2;
// let mod=10%5;//residuo
// let uno=1;
// uno++;
// console.log(uno);//incremento
// let dos=2;
// dos--;//decremento
// console.log(dos);

// //operadores relacionales
// let mayor=5>3;
// let menor=3<5;
// let mayorigualque=20>=10;
// let menorigualque=20<=10;
// let igualque=10=="10";
// let exactamenteigualque=10===10;
// let diferente=10!=30;
// ECMASCRIPT 6

//tipos de datos especiales o compuestos
// arrays - vectores (conjunto de datos y pueden ser diferente)
// objetos

let frutas = ["pera", "manzana", "platano"];
let numeros = ["cinco", "veinte", 6, 23];

// objetos
let persona = {nombre: "chantal"};

// objetos JSON 
let personas = [
    {nombre: "Juan", edad: 23, correo: "Juan23@ucol.mx"}
        {nombre: "Brayan", edad: 27, correo: "Despock@ucol.mx"}
            {nombre: "Samantha", edad: 19, correo: "Samantha@ucol.mx"}
]

//destructuracion (destrcctury objet)
//una api es un servicio de backend que da una informacion de tipo JSON que se utiliza para manipularla

let num1=10;
let num2=14;
//and o Y
let and = (num1>10 && num2 > 10);
para que and tenga resultado true, todas las condiciones se deben cumplir o ser verdaderas. si una es falsa, el resultado sera falso

let or= (num1 >10 || num2>10);
una u otra debe ser verdadera, no necesariamente ambas. la unica manera de que el s¿resultado sea falso es que todos los criterios sean falsos
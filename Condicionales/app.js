// let num1 = 101;
// let num2 = 10;

// if (num1>num2) {
//     console.log("el numero: "+num1+" es mayor que el " + num2);
// } else {
//     console.log("el numero: "+num2+" es mayor que el " + num1)
    
// }

// let edad= prompt("Dame tu edad");
// if (edad>0) {
//     if (edad>=18){
//         document.write("eres mayor de edad");
//     }else{
//         Document.write("Eres menor de edad");
// //     }
// // }else {
// //     document.write("Edad no valida");
// // }


// let dia=prompt("Introduce un dia").toLowerCase();

// switch (dia) {
//     case "lunes":
//         console.log("El dia que seleccionaste es lunes");
//         break;
//     case "martes":
//         console.log("el dia que seleccionaste es martes");
//         break;
//     case "miercoles":
//         console.log("El dia que seleccionaste es miercoles");
//         break;
//     case "jueves":
//         console.log("el dia que seleccionaste es jueves");
//         break;
//     case "viernes":
//         console.log("El dia que seleccionaste es viernes");
//         break;
//     default:
//         console.log("Este no es un dia")
//         break;
// }
// //Operador ternario
// let numero1= 15;
// let numero2= 20;

// let valor=(numero1 > numero2) ? "el numero1 es mayor":"El numero2 es mayor"


//Mayor o menor que
// let n1=prompt("Introduce un numero");
// let n2=prompt("Introduce otro numero");

// if (n1<n2) {
//     document.write("El numero "+n1+" es menor que el numero "+n2);
    
// } else {
//     if (n1>n2) {
//         document.write("El numero "+n1+" es mayor que el numero "+n2);
        
//     } else {
//         document.write("Los numeros introducidos son iguales")
//     }
    
// }

// //Par o impar
// let nu=prompt("Introduce un numero");
// // let res= nu%2
// if (nu % 2==0) {
//     document.write("El numero es par");
// } else {
//     document.write("El numero es impar");
// }

//Pedir dos numeros enteros y devolver el cociente, es decir, el resultado de 
//Dividir el numero 1 entre el numero 2, pero si uno de los numero es 0, mandar mensaje de error

let nu1=prompt("Introduce un numero entero");
let nu2=prompt("Introduce otro numero entero");

if ((nu1)||(nu2)==0) {
    alert("Error, ambos numeros deben ser mayor a 0");
} else {
    let div=nu1/nu2;
    document.write("El resultado de la operacion es " + div);
}

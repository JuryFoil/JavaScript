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
//     }
// }else {
//     document.write("Edad no valida");
// }


let dia=prompt("Introduce un dia").toLowerCase();

switch (dia) {
    case "lunes":
        console.log("El dia que seleccionaste es lunes");
        break;
    case "martes":
        console.log("el dia que seleccionaste es martes");
        break;
    case "miercoles":
        console.log("El dia que seleccionaste es miercoles");
        break;
    case "jueves":
        console.log("el dia que seleccionaste es jueves");
        break;
    case "viernes":
        console.log("El dia que seleccionaste es viernes");
        break;
    default:
        console.log("Este no es un dia")
        break;
}
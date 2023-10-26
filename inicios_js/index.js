// Codigo que le pida al usuario su edad y si es mayor de edad
// le pregunte su nombre y apellido y lo salude en el DOM "Hola Fulanito"
// Si no, le ponga en el DOM "Lo siento, no eres mayor de edad"

let edad=prompt("¡Hola!, introduce tu edad");

if (edad >=18) {
    let nombre=prompt("Introduce tu nombre");
    alert("Bienvenido(a)"+" "+nombre);
} else {
    alert("Lo sieto, no puedes continuar")
}

//Solicitar al usuario sus tres calificaciones con un formulario de input 
//y un boton de enviar y sacar el promedio del usuario, si es mayor a 8 
//mostrar en el DOM "felicidades lo lograste", si no, "sigue estudiando"
// document.getElementById("calificacion1").value
// document.querySelector("")
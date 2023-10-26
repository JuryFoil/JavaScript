function sub(){
    let cf1=document.getElementById("Cal1").value;
    let cf2=document.getElementById("Cal2").value;
    let cf3=document.getElementById("Cal3").value;
    let suma=cf1+cf2+cf3;
    let result=suma/3;
    if (result>=8) {
        alert("Tu calificacion es "+result+", ¡Felicidades, lo lograste!");
    } else {
        alert("Tu calificacion es "+result+". ¡Lo siento, tienes ordinario!");
    }
}
function sub(){
    let cf1=parseFloat(document.getElementById("Cal1").value);
    let cf2=parseFloat(document.getElementById("Cal2").value);
    let cf3=parseFloat(document.getElementById("Cal3").value);

    let result=(cf1+cf2+cf3)/3;
    if (result<=10){
        if (result>=8) {
            document.write("Tu calificacion es "+result+", ¡Felicidades, lo lograste!");
        } else {
                document.write("Tu calificacion es "+result+". ¡Lo siento, tienes ordinario!");
        }
    }else {
        alert("¡Error!, introduce los valores correctamente. Los valores introducidos deben ser igual o menor a 10.");
    }  
       
}

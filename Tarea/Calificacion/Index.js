        let cf1=null;
        let cf2=null;
        let cf3=null;
function sub(){
    cf1=document.getElementById("Cal1").value;
    cf2=document.getElementById("Cal2").value;
    cf3=document.getElementById("Cal3").value;
    let result=(cf1+cf2+cf3)/3;
    if (result>=8) {
        document.write("Tu calificacion es "+result+", ¡Felicidades, lo lograste!");
    } else {
        document.write("Tu calificacion es "+result+". ¡Lo siento, tienes ordinario!");
    }
}
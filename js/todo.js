function calcular(){
    var peso = document.getElementById("peso").value;
    var peso2 = document.getElementById("peso2").value;
    var r;
    tcm = parseInt(peso)*22;

    if(document.getElementById('sedentaria').checked) {
        r = tcm * 1.3;
    }else if(document.getElementById('ligeramente').checked) {
        r = tcm * 1.5;
    }else if(document.getElementById('muy').checked) {
        r = tcm * 1.7;
    }else if(document.getElementById('extremadamente').checked) {
        r = tcm * 2;
    }

    var obj = document.getElementById('objetivo');
    var l= obj.value;

    switch (l){
        case 'masa':
            y= parseInt(r)+400;
            y2= parseInt(peso2)*2.5;
            y= parseInt(r)+400;
            y2= parseInt(peso2)*2.5;
            r=parseInt(y2)*parseInt(4);
            t=parseInt(y)-parseInt(r);
            a=parseInt(t)/parseInt(2);
            x=parseInt(a)/parseInt(4);
            document.getElementById('resultado').value = "Debe consumir "+ y +" Kcal. por día";
            document.getElementById('resultado2').value = "Debe consumir "+ y2 +" gr. de proteina";
            document.getElementById('resultado3').value = "Debe consumir "+ x +" gr. de carbohidratos";
        break;
        case 'adelgazar':
            y= parseInt(r)-500;
            y2= parseInt(peso2)*3;
            r=parseInt(y2)*parseInt(4);
            t=parseInt(y)-parseInt(r);
            a=parseInt(t)/parseInt(2);
            x=parseInt(a)/parseInt(4);
            document.getElementById('resultado').value = "Debe consumir "+ y +" Kcal. por día";
            document.getElementById('resultado2').value = "Debe consumir "+ y2 +" gr. de proteina";
            document.getElementById('resultado3').value = "Debe consumir "+ x +" gr. de carbohidratos";
        break;
    }


}
function limpiar(){
    document.getElementById("peso").value="";
    document.getElementById("peso2").value="";
    document.getElementById("resultado").value="";
    document.getElementById("resultado2").value="";
    document.getElementById("resultado3").value="";
    
}
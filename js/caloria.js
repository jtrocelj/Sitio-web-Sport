function calcular(){
    var peso = document.getElementById("peso").value;
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
        document.getElementById('resultado').value = "Debe consumir "+ y +" Kcal. por día";
        break;
        case 'adelgazar':
            y= parseInt(r)-500;
        document.getElementById('resultado').value = "Debe consumir "+ y +" Kcal. por día";
        break;
    }

}

function limpiar(){
    document.getElementById("peso").value="";
    document.getElementById("sedentaria").value="";
    document.getElementById("ligeramente").value="1";
    document.getElementById("muy").value="";
    document.getElementById("extremadamente").value="";
    document.getElementById("resultado").value="";
    
}
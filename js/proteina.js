function calcular(){
    var peso = document.getElementById("peso").value;
    var obj = document.getElementById('objetivo');
    var l= obj.value;

    switch (l){
        case 'masa':
            y= parseInt(peso)*2.5;
        document.getElementById('resultado').value = "Debe consumir "+ y +" gr. de proteina";
        break;
        case 'adelgazar':
            y= parseInt(peso)*3;
        document.getElementById('resultado').value = "Debe consumir "+ y +" gr. de proteina";
        break;
    }

}
function limpiar(){
    document.getElementById("peso").value="";
    document.getElementById("resultado").value="";
    
}
function calcular(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    
    altura = Math.round(altura) / 100;
        peso = Math.round(peso);
        //La función Math.pow sirve para calcular potencias
        var indice = (peso / Math.pow(altura, 2)).toFixed(2);;
    document.getElementById('resultado').value = "Su indice de masa corporal es "+ indice;
}
function limpiar(){
    document.getElementById("peso").value="";
    document.getElementById("altura").value="";
    document.getElementById("resultado").value="";

    
}
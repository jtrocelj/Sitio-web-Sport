function mostrarContenido(){
    var obj = document.getElementById('objetivo');
var l= obj.value;

switch (l){
    case 'masa':
        document.getElementById('contenidoMasa').style.display = 'block';
        document.getElementById('contenidoAdelgasar').style.display = 'none';
    break;
    case 'adelgazar':
        document.getElementById('contenidoAdelgasar').style.display = 'block';
        document.getElementById('contenidoMasa').style.display = 'none';
    break;
}

}

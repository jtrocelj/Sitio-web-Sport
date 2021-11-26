function abrirUrl(url,contenedor){
    $.get(url,{},function(data){
        $("#"+contenedor).html(data);
    });
    document.getElementById('contenidoBody').style.display = 'none';
    document.getElementById('contendedorp').style.display = 'block';
}


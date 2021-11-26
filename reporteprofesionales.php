<?php ob_start(); 
$nombreImagen = "img/ganarmasa.jpg";
$imagenBase64 = "data:img/jpg;base64," . base64_encode(file_get_contents($nombreImagen));
?>
<link rel="stylesheet" href="css/styles.css">
<script src="js/todo.js"></script>

<img src="img/ganarmasa.jpg" width="100%" height="950px"/>  
<img src="img/ganarmasa2.jpg" width="100%" height="900px"/>   
  

<?php

require_once 'dompdf/autoload.inc.php';
use Dompdf\Dompdf;
$dompdf = new DOMPDF();
$dompdf->load_html(ob_get_clean());
$dompdf->render();
$pdf = $dompdf->output();
$filename = "PDF/nutricion.pdf";
file_put_contents($filename, $pdf);
$dompdf->stream($filename);
?>

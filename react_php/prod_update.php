<?php
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length');
header('Access-Control-Allow-Origin: *');
   $metodo = $_SERVER["REQUEST_METHOD"];
    $ruta = implode("/", array_slice(explode("/", $_SERVER["REQUEST_URI"]), 3));
    $datos = json_decode(file_get_contents("php://input"), true);
    require ('conexion.php');
    $id = $datos['id'];
    $nombre = $datos['nombre'];
    $precio = $datos['precio'];
    $consulta = "UPDATE productos SET nombre='$nombre', precio= '$precio' WHERE id='$id'";
    $resultado = mysqli_query($conexion,$consulta)
    or die('consulta caida');
    echo "ok";
   
?>
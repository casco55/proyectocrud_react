<?php
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length');
header('Access-Control-Allow-Origin: *');
   $metodo = $_SERVER["REQUEST_METHOD"];
    $ruta = implode("/", array_slice(explode("/", $_SERVER["REQUEST_URI"]), 3));
    $datos = json_decode(file_get_contents("php://input"));
    require ('conexion.php');

    $consulta = "SELECT * from productos";
    $resultado = mysqli_query($conexion,$consulta)
    or die('consulta caida');
    $listado = [];
    while ($extraido = mysqli_fetch_array($resultado)){
        $linea = ['id' => $extraido['id'], 'nombre' => $extraido['nombre'], 'precio' => $extraido['precio']];
        array_push($listado, $linea);
    }
    $listado_json = json_encode($listado);
    echo $listado_json;
?>
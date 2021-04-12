<?php
    $metodo = $_SERVER["REQUEST_METHOD"];
    $ruta = implode("/", array_slice(explode("/", $_SERVER["REQUEST_URI"]), 3));
    $datos = json_decode(file_get_contents("php://input"));
    switch($metodo){
        case 'GET':
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
        break;
        case 'POST':
            switch ($ruta) {
                case 'usuario':
                    $nombreUsuario = $datos->nombre;
                    //Aquí podríamos acceder a otras propiedades
                    echo json_encode("Guardamos un nuevo usuario con el nombre " . $nombreUsuario);
                    break;
                case 'venta':
                    echo json_encode("Guardamos una venta");
                    break;
            }
        break;
        case 'PUT':
            switch ($ruta) {
                case 'usuario':
                    echo json_encode("Actualizar un usuario");
                    break;
                case 'venta':
                    echo json_encode("Actualizar una venta");
                    break;
            }
        break;
        case 'DELETE':
            switch ($ruta) {
                case 'usuario':
                    echo json_encode("Eliminar un usuario");
                    break;
                case 'venta':
                    echo json_encode("Eliminar una venta");
                    break;
            }
        break;
    }
?>
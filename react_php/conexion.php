<?php
//servidor, usuario de base de datos, contraseña del usuario, nombre de base de datos
	$conexion = new mysqli("localhost","ellavado_jrdesarrollos_react","oriwater55","ellavado_productos");
	if(mysqli_connect_errno()){
		echo 'Conexion Fallida : ', mysqli_connect_error();
		
		exit();
	}
?>
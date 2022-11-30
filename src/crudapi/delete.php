<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$mysqli=new mysqli('localhost','root','','crudapi');
$id = file_get_contents("php://input");

$sql="delete from students where id=$id";
$query=$mysqli->query($sql);

echo "success";
?>
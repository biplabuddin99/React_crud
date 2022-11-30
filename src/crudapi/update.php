<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$mysqli=new mysqli('localhost','root','','crudapi');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

	$id=$request->id;
	$student_id=$request->student_id;
	$name=$request->name;
	$batch_number=$request->batch_number;
	
	$sql="update students set student_id='$student_id', name='$name', batch_number='$batch_number' where id=$id";
	$query=$mysqli->query($sql);
	echo "success";
?>
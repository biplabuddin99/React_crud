<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$mysqli=new mysqli('localhost','root','','crudapi');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if($request->student_id){
	$student_id=$request->student_id;
	$name=$request->name;
	$batch_number=$request->batch_number;
	$sql="INSERT INTO students(id,student_id,name,batch_number) VALUES ('','$student_id','$name','$batch_number')";
	$query=$mysqli->query($sql);
	echo $mysqli->insert_id;
}
?>
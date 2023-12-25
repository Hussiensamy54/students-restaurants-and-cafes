<?php

$Email=$_REQUEST["email"];
$password=$_REQUEST["password"];

if(isset($_POST['submit'])){
    

    $host="localhost";
    $user="root";
    
    $database="resturants and cafes";

    $conn = mysqli_connect($host,$user,$database);
    
    
    $insert="insert into users values('$password','$Email')";
    
    mysqli_query($conn,$insert);

    if($conn){
        echo("<h1 style='color:green;'> MISSION successful</h1>!");
    }else{
        echo("<h1 style='color:red;'>MISSION Failed!</h1>!");
    };
}
?>
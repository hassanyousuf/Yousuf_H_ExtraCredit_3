<?php
    $user = "root";
    $pw = "";

    try{
//try means do this

$conn = new PDO('mysql:host=localhost:dbname=db_extra_credit3', $user, $pw);
//PDO means...

    } catch(PDOException $exception){
        echo 'connect error!' . $exception->getMessage();
    }

//this is connection to the database so the informations flows

?>
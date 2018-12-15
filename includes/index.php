<?php

include 'functions.php';

if (isset($_GET['movie'])){
//pass the connection and the movie id to a funciton
$data = get_single_video($conn, $_GET['movie']);
echo json_encode($data);

// this if statement is for grabbing one movie


}else {
    //pass the connection and the movie id to a funciton
    $data = get_all_videos($pdo, $vid);
    echo json_encode($data);

//this else statement is for grabbing all movies

}
?>
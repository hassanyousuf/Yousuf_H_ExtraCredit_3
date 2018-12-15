<?php
include 'connect.php';

function get_single_video($pdo, $vid) {
    //currently the $pdo, $vid are empty place holders to grab
    $query = "SELECT * FROM video WHERE id = '$vid'";

$get_video = $pdo->query($query);
$results = array();

while($row = $get_video->fetch(PDO::FETCH_ASSOC)){
    $results[] = $row;

//you could run subresults queries - just write another function and append.



}

//start of recording


return $results;

}

function get_all_videos($pdo, $vid) {
    //currently the $pdo, $vid are empty place holders to grab
    $query = "SELECT * FROM video WHERE id = '$vid'";

$get_video = $pdo->query($query);
$results = array();

while($row = $get_video->fetch(PDO::FETCH_ASSOC)){
    $results[] = $row;

}


}

?>
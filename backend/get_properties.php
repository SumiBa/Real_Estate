<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

include('db_connect.php');

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

// Fetching properties from the database
$sql = "SELECT * FROM properties"; 
$result = $conn->query($sql);

$properties = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $properties[] = $row;
    }
    
    echo json_encode($properties); 
} else {
    echo json_encode(["message" => "No properties found"]);
}

$conn->close();
?>

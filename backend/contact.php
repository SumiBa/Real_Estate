<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
ini_set('display_errors', 1);
error_reporting(E_ALL);
include('db_connect.php');


$name = $email = $message = "";
$name_err = $email_err = $message_err = "";

$formSubmitted = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    if (empty(trim($_POST["name"]))) {
        $name_err = "Please enter your name.";
    } else {
        $name = trim($_POST["name"]);
    }


    if (empty(trim($_POST["email"]))) {
        $email_err = "Please enter your email.";
    } elseif (!filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL)) {
        $email_err = "Please enter a valid email address.";
    } else {
        $email = trim($_POST["email"]);
    }

    if (empty(trim($_POST["message"]))) {
        $message_err = "Please enter your message.";
    } else {
        $message = trim($_POST["message"]);
    }

    if (empty($name_err) && empty($email_err) && empty($message_err)) {

        $sql = "INSERT INTO enquiries (name, email, message) VALUES (?, ?, ?)";

        if ($stmt = $conn->prepare($sql)) {

            $stmt->bind_param("sss", $param_name, $param_email, $param_message);

            // Setting the parameters
            $param_name = $name;
            $param_email = $email;
            $param_message = $message;

            // Executing the statement
            if ($stmt->execute()) {
                // Returning a successful JSON response
                echo json_encode(["status" => "success", "message" => "Form submitted successfully"]);
            } else {

                echo json_encode(["status" => "error", "message" => "Something went wrong. Please try again later."]);
            }


            $stmt->close();
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Please fill in all fields correctly."]);
    }

    $conn->close();
}
?>

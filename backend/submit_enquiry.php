<?php
include('db_connect.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (
    isset($data['name']) &&
    isset($data['email']) &&
    isset($data['message']) &&
    isset($data['property_id'])
) {
    $name = $conn->real_escape_string($data['name']);
    $email = $conn->real_escape_string($data['email']);
    $message = $conn->real_escape_string($data['message']);
    $property_id = (int)$data['property_id'];

    $sql = "INSERT INTO property_enquiries (name, email, message, property_id, enquiry_date) 
            VALUES ('$name', '$email', '$message', $property_id, NOW())";

    if ($conn->query($sql) === TRUE) {

        $propertyQuery = "SELECT title, price, description FROM properties WHERE id = $property_id";
        $result = $conn->query($propertyQuery);

        if ($result && $result->num_rows > 0) {
            $property = $result->fetch_assoc();

            // Setup email
            $mail = new PHPMailer(true);

            try {
                // Server settings
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';              
                $mail->SMTPAuth = true;
                $mail->Username = 'sumitbairagi283@gmail.com';    
                $mail->Password = 'zayttwwukooekslm';     
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port = 587;

                // Recipients
                $mail->setFrom('sumitbairagi283@gmail.com', 'Godrej Horizon');
                $mail->addAddress($email, $name);

                // Email content
                $mail->isHTML(true);
                $mail->Subject = "Property Details - " . $property['title'];
                $mail->Body = "
                    <h3>Thank you for your enquiry, $name!</h3>
                    <p>Here are the details of the property you enquired about:</p>
                    <ul>
                        <li><strong>Type:</strong> {$property['title']}</li>
                        <li><strong>Price:</strong> ₹" . number_format($property['price'], 2) . "</li>
                        <li><strong>Description:</strong> {$property['description']}</li>
                    </ul>
                    <p>We'll get back to you soon!</p>
                ";

                $mail->send();
                echo json_encode(["success" => true, "message" => "Enquiry submitted and email sent successfully"]);
            } catch (Exception $e) {
                echo json_encode(["success" => true, "message" => "Enquiry submitted but email failed: " . $mail->ErrorInfo]);
            }
        } else {
            echo json_encode(["success" => true, "message" => "Enquiry submitted but property details not found"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Database error: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}

$conn->close();
?>

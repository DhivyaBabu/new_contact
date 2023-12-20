<?php
// Replace these values with your actual database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// Validate and sanitize form data (you may need to improve this based on your requirements)

// Insert data into the database
$sql = "INSERT INTO contact_us (name, phone, email, subject, message) VALUES ('$name', '$phone', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Form submitted successfully";
} else {
    echo "Try Again";
}

$conn->close();

?>

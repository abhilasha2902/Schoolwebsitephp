<?php
$servername = "localhost"; // XAMPP default
$username = "root";        // Default username
$password = "";            // Leave blank for XAMPP
$dbname = "my_database";   // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>

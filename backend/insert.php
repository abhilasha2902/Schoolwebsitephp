<?php
require 'connect.php'; // Use the connection script

$sql = "INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

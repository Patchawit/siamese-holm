<?php
    $firstName = $_POST['firstName'];
    $surName = $_POST['surName'];
    $numberp = $_POST['numberp'];
    $email = $_POST['email'];
    $design = $_POST['design'];
    $budget = $_POST['budget'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "siameseregis";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "INSERT INTO register (firstName, surName, numberp, email, design, budget)
VALUES ('$firstName', '$surName', '$numberp', '$email', '$design', '$budget')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();


?>
<?php
    $firstName = $_POST['firstName'];
    $surName = $_POST['surName'];
    $numberp = $_POST['numberp'];
    $email = $_POST['email'];
    $design = $_POST['design'];
    $budget = $_POST['budget'];

$servername = "localhost";
$username = "siameseregis"; //root
$password = "Jj0_lp646";   //""
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

//--------------------------------------------
$data_array =  array(
  "oid"=> "00D6F0000027leq",
    "lead_source"=> "Web Registration",
    "_00N0k000001DWVa"=> "1",
    "retURL"=> "https://siameseholm.com/",
    "Project_Code"=> "00089",
    "Need_Auto_Assignment"=> "1",
    "Salutation"=> "คุณ",
    "Other_Salutation"=> "",
    "first_name"=> $firstName,
    "last_name"=> $surName,
    "Gender"=> "",
    "company"=> "",
    "email"=> $email,
    "mobile"=> $numberp,
    "country"=> "",
    "Province"=> "",
    "District"=> "",
    "Sub_District"=> "",
    "Nationality"=> "Thai",
    "Other_Nationality"=> "",
    "phone"=> $numberp,
    "Budget"=> "",
    "SizeOfCondo"=> "",
    "Townhome"=> "",
    "LineId"=> "",
    "Message"=> "",
    "AddressInThai"=> "1",
    "Purpose"=> "Living",
    "Newsletter"=> "1"
);

$ch = curl_init('https://app.siameseasset.co.th/salesforceapi/api/ServiceApi');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_array);

// execute!
$response = curl_exec($ch);

// close the connection, release resources used
curl_close($ch);

// do anything you want with your response
var_dump($response);


?>
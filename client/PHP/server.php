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

//---------------------API-----------------------

$data_array =  array(
  "oid"=> "00D6F0000027leq",
    "lead_source"=> "Web Registration",
    "_00N0k000001DWVa"=> "1",
    "retURL"=> "https://siameseholm.com/",
    "Project_Code"=> $design,
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
    "Budget"=> $budget,
    "SizeOfCondo"=> "",
    "Townhome"=> "",
    "LineId"=> "",
    "Message"=> "",
    "AddressInThai"=> "1",
    "Purpose"=> "Living",
    "Newsletter"=> "1"
);

$payload = json_encode($data_array);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://app.siameseasset.co.th/salesforceapi/api/ServiceApi");

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch, CURLOPT_POST, true);

curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  'Content-Type: application/json',
  'Content-Length: ' . strlen($payload))
);

$response = curl_exec($ch);

curl_close($ch);


?>
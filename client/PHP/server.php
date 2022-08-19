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


//---------------------Email-----------------------
$from = "gcp@digitiveworks.com";
$to = "oraya@siameseasset.co.th, benyapa@siameseasset.co.th, narongphan@siameseasset.co.th, Naruamon.r@siameseasset.co.th, chatorn@siameseasset.co.th"; 
$subject = "แจ้งเตือนการลงทะเบียนผ่านเว็บไซต์ Siameseholm.com";
$message = "แจ้งเตือนการลงทะเบียนข้อมูลผู้สนใจผ่านเว็บไซต์ Siameseholm.com โดยมีรายละเอียดดังนี้
            ชื่อ: $firstName 
            นามสกุล: $surName 
            เบอร์โทรศัพท์: $numberp 
            อีเมล: $email 
            แบบบ้านที่สนใจ: $design 
            งบประมาณ: $budget";
$headers = "From:" . $from;
mail($to, $subject, $message, $headers);


//--------------------line-----------------------------
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
date_default_timezone_set("Asia/Bangkok");

$sToken = "wwAZsJ2sUskxsKua0iIi1RdXSMwx5ZMFXcHRDY7oJEH";
$sMessage = "Project Name: Siamese Blossom and Holm
Full Name:$firstName $surName
Emaiil: $email
Mobile: $numberp";

$chOne = curl_init();

curl_setopt( $chOne, CURLOPT_URL, "https://notify-api.line.me/api/notify");
curl_setopt( $chOne, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt( $chOne, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt( $chOne, CURLOPT_POST, 1);
curl_setopt( $chOne, CURLOPT_POSTFIELDS, "message=".$sMessage);

$header = array( 'Content-type: application/x-www-form-urlencoded', 'Authorization: Bearer '.$sToken.'', );

curl_setopt($chOne, CURLOPT_HTTPHEADER, $header);
curl_setopt( $chOne, CURLOPT_RETURNTRANSFER, 1);

$result = curl_exec( $chOne );

//Result error

if(curl_error($chOne))
{
echo 'error:' . curl_error($chOne);
}
else {
$result_ = json_decode($result, true);
echo "status : ".$result_['status']; echo "message : ". $result_['message'];
}
curl_close( $chOne );  

?>


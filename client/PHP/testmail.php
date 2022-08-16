<?php

    $firstName = $_POST['firstName'];
    $surName = $_POST['surName'];
    $numberp = $_POST['numberp'];
    $email = $_POST['email'];
    $design = $_POST['design'];
    $budget = $_POST['budget'];

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
// $from = "";
$to = $email; 
$subject = "Checking PHP mail";
$message = "ชื่อ: $firstName นามสกุล: $surName เบอร์โทรศัพท์: $numberp อีเมล: $email แบบบ้านที่สนใจ: $design งบประมาณ: $budget";
// $headers = "From:" . $from;
if(mail($to, $subject, $message)) {
    echo "The email message was sent.";
} else {
    echo "The email message was not sent.";
}

?> 
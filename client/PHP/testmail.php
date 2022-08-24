<?php

    $firstName = $_POST['firstName'];
    $surName = $_POST['surName'];
    $numberp = $_POST['numberp'];
    $email = $_POST['email'];
    $design = $_POST['design'];
    $budget = $_POST['budget'];


// $from = "gcp@digitiveworks.com";
// $to = "kadaj_max@windowslive.com, patchawit@digitiveworks.com"; 
// $subject = "แจ้งเตือนการลงทะเบียนผ่านเว็บไซต์ Siameseholm.com";
// $message = "แจ้งเตือนการลงทะเบียนข้อมูลผู้สนใจผ่านเว็บไซต์ Siameseholm.com โดยมีรายละเอียดดังนี้ <br/>
//             ชื่อ: $firstName <br/>
//             นามสกุล: $surName <br/>
//             เบอร์โทรศัพท์: $numberp <br/>
//             อีเมล: $email <br/>
//             แบบบ้านที่สนใจ: $design <br/>
//             งบประมาณ: $budget";
// $headers = 'From: '.$from.'' . "\r\n" .
// 'Content-type: text/html; charset=utf8' .
// 'X-Mailer: PHP/' . phpversion();
// mail($to, $subject, $message, $headers);


$to = "patchawit@digitiveworks.com"; 
$subject = "=?UTF-8?B?".base64_encode("แจ้งเตือนการลงทะเบียนผ่านเว็บไซต์ Siameseholm.com")."?=";
$headers = "MIME-Version: 1.0' . \r\n";
$headers = "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: gcp@digitiveworks.com\r\n";
$headers .= "Reply-To: gcp@digitiveworks.com\r\n";
$headers .= "X-Mailer: PHP/picoHosting";
$message = "แจ้งเตือนการลงทะเบียนข้อมูลผู้สนใจผ่านเว็บไซต์ Siameseholm.com โดยมีรายละเอียดดังนี้ <br/>
            ชื่อ: $firstName <br/>
            นามสกุล: $surName <br/>
            เบอร์โทรศัพท์: $numberp <br/>
            อีเมล: $email <br/>
            แบบบ้านที่สนใจ: $design <br/>
            งบประมาณ: $budget";
mail($to, $subject, $message, $headers);


//     ini_set('display_errors', 1);
//     ini_set('display_startup_errors', 1);
//     error_reporting(E_ALL);
//     date_default_timezone_set("Asia/Bangkok");

//     $sToken = "wwAZsJ2sUskxsKua0iIi1RdXSMwx5ZMFXcHRDY7oJEH";
//     $sMessage = "Project Name: Siamese Blossom and Holm
// Full Name:$firstName $surName
// Emaiil: $email
// Mobile: $numberp";

//     $chOne = curl_init();

//     curl_setopt( $chOne, CURLOPT_URL, "https://notify-api.line.me/api/notify");
//     curl_setopt( $chOne, CURLOPT_SSL_VERIFYHOST, 0);
//     curl_setopt( $chOne, CURLOPT_SSL_VERIFYPEER, 0);
//     curl_setopt( $chOne, CURLOPT_POST, 1);
//     curl_setopt( $chOne, CURLOPT_POSTFIELDS, "message=".$sMessage);

//     $header = array( 'Content-type: application/x-www-form-urlencoded', 'Authorization: Bearer '.$sToken.'', );

//     curl_setopt($chOne, CURLOPT_HTTPHEADER, $header);
//     curl_setopt( $chOne, CURLOPT_RETURNTRANSFER, 1);

//     $result = curl_exec( $chOne );

// //Result error

//     if(curl_error($chOne))
//     {
//     echo 'error:' . curl_error($chOne);
//     }
//     else {
//     $result_ = json_decode($result, true);
//     echo "status : ".$result_['status']; echo "message : ". $result_['message'];
//     }
//     curl_close( $chOne );  

?> 


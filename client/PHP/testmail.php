<?php

    $firstName = $_POST['firstName'];
    $surName = $_POST['surName'];
    $numberp = $_POST['numberp'];
    $email = $_POST['email'];
    $design = $_POST['design'];
    $budget = $_POST['budget'];

// ini_set( 'display_errors', 1 );
// error_reporting( E_ALL );

$from = "gcp@digitiveworks.com";
$to = $email; 
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

?> 
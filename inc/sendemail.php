<?php 
function sanitize_my_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}

    $fname = $_POST['Fname'];
    $lname = $_POST['Lname'];
    $email = $_POST['email'];
    $sub = $_POST['sub'];
    $mess = $_POST['message'];
    

    $message = 'Сообщение от: '.$fname.' '.$lname."\n"; 
    $message .= 'Email: '.$email."\n"; 
    $message .= 'Тема: '.$sub."\n"; 
    $message .= 'Сообщение: '.$mess."\n"; 

$to_email = 'otechestvo-s@mail.ru';
$subject = $_REQUEST['sub'];
$headers = 'From: noreaply @ otechestvo.zapros .ru';
//check if the email address is invalid $secure_check
$secure_check = sanitize_my_email($to_email);
if ($secure_check == false) {
    echo "Invalid input";
} else { //send email 
    mail($to_email, $subject, $message, $headers);
    echo "This email is sent using PHP Mail";
}
?>
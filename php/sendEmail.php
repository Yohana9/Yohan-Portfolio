<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name    = htmlspecialchars($_POST['name']);
    $email   = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    if($email){
        $to      = "your-email@example.com";
        $subject = "New message from $name";
        $headers = "From: $email\r\nReply-To: $email\r\n";
        mail($to, $subject, $message, $headers);
        echo "success";
    } else {
        http_response_code(400);
        echo "invalid email";
    }
} else {
    http_response_code(405);
    echo "method not allowed";
}

<?php
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $message = $_POST['message'];

    $email_from = 'Andrew Bennett Driving School Site';
    $email_subject = 'New Message from Andrew Bennett Driving School';
    $email_body = "Name: $name \n".
                  "Email: $email \n".
                  "Message: $message \n";

    $to ="george-bennett1@outlook.com";

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("location: index.html");
?>
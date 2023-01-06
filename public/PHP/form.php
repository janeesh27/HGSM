<?php

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Set the recipient email address
$to = 'janeesh.tin@gmail.com';

// Set the email subject
$subject = 'New Form Submission';

// Build the email content
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$phone_content .= "Phone: $phone\n";
$email_content .= "Message:\n$message\n";

// Build the email headers
$email_headers = "From: $name <$email>";

// Send the email
mail($to, $subject, $email_content, $email_headers);

?>
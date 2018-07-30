<?php
$to = 'kooshesh@gmail.com';
$subject = 'react coder job message';
$from = 'reactcoder@react-coder.com';

// To send HTML mail, the Content-type header must be set
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Create email headers
$headers .= 'From: ' . $from . "\r\n" .
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();


// Sending email
mail($to, $subject, json_encode($_REQUEST), $headers);
header("Location: /contact-us?thank=1");


?>

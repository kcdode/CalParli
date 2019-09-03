
<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = "From: " . $email;
$to = "calparli@gmail.com";
$email_subject = 'PDB Contact Form Submission';

$body = "Name: $name\nE-mail: $email\n\nMessage:\n$message";
//ini_set('SMTP', "smtp.gmail.com");
//ini_set('smtp_port', "465");

mail($to, $email_subject, $body, $from);

//echo'
//   <script>
//   window.onload = function() {
//      alert("Thank you for your message");
//   }
//   </script>';

?>

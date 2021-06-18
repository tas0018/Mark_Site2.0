<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    $subject = "Apogee Site Email"

    $mailTo = "tas0018@auburn.edu"
    $headers = "From: ".$mailFrom;
    $txt =  "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}
?>
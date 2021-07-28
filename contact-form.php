<?php 
ini_set('display_errors', 1);

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    $subject = "Apogee Site Email";

    $mailTo = "webtest001@yahoo.com";
    $headers = "From: ".$mailFrom;
    $txt =  "test";

    mail('webtest001@yahoo.com', $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}
?>
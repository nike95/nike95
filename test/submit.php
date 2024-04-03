<?php
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $data = "$firstName\t$lastName\t$phone\t$email\n";
    $file = fopen("data.txt", "a");
    fwrite($file, $data);
    fclose($file);
?>


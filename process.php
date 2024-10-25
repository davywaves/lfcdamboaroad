<?php
session_start(); // Start the session


if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));

    // Basic validation
    $errors = [];

    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    if (empty($phone)) {
        $errors[] = "Phone number is required.";
    } elseif (!preg_match('/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/', $phone)) {
        $errors[] = "Phone number must be in the format 123-456-7890.";
    }

    if (empty($errors)) {

        $_SESSION['name'] = $name;

 
        header('Location: blog.php');
        exit();
    } else {

        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
        echo "<p><a href='index.html'>Go back and try again</a></p>";
    }
}
?>

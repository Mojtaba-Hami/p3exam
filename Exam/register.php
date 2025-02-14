<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./register.css">
</head>
<body>
<?php 

    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $repassword = $_POST['repassword'];
?>
    
<?php
    if (!empty($fullname) && !empty($email) && !empty($password) && !empty($repassword)) {
    if ($password === $repassword) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "<div class='content'>";
            echo "<h1>ورورد موفقیت آمیز بود</h1>";
            echo "<img src='./success-icon-10.png'>";
            echo "</div>";
        } else {
            echo "<div class='content'>";
            echo "<h1>فرمت ایمیل وارد شده صحیح نمی‌باشد</h1>";
            echo "   <img src='./pngtree-failed-rubber-stamp-failure-png-image_9941934.png' >";
            echo "</div>";
        }
    } else {
        echo "<div class='content'>";
        echo "<h1>پسورد و تکرار آن یکسان نیستند</h1>";
        echo "   <img src='./pngtree-failed-rubber-stamp-failure-png-image_9941934.png' >";
        echo "</div>";
    }
} else {
    echo "<div class='content'>";
    echo "<h1>لطفا تمامی فیلدها را وارد کنید!</h1>";
    echo "<img src='./pngtree-failed-rubber-stamp-failure-png-image_9941934.png' >";
    echo "</div>";
}
?>
    
</body>
</html>

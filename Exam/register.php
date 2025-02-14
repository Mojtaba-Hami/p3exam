<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php 

    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $repassword = $_POST['repassword'];

    echo "Fullname: " . $fullname . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Password: " . $password . "<br>";
    echo "Repassword: " . $repassword . "<br>";

   if (!empty($fullname) && !empty($email) && !empty($password) && !empty($repassword)) {
    if ($password === $repassword) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "<h1>ورورد موفقیت آمیز بود</h1>";
        } else {
            echo "<h1>فرمت ایمیل وارد شده صحیح نمی‌باشد</h1>";
        }
     } else {
        echo "<h1>پسورد و تکرار آن یکسان نیستند</h1>";
    }
} else {
    echo "<h1>لطفا تمامی فیلدها را وارد کنید!</h1>";
}

    ?>
    
   
</body>
</html>

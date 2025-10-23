<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

session_start();
$_SESSION["kullanici_adi"] = "Ahmet123";
$_SESSION["giris_zamani"] = time();
echo "Session atandı. Kullanıcı adı: " . $_SESSION["kullanici_adi"] . "<br>";
if (isset($_SESSION["kullanici_adi"])) {
echo "Tekrar hoş geldin, " . $_SESSION["kullanici_adi"] . "!<br>";
} else {
echo "Giriş yapmamışsınız.<br>";
}
unset($_SESSION["giris_zamani"]);
echo "Giriş zamanı session'dan silindi.";
?>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

$gecerlilik_suresi = time() + (60 * 60 * 24); 
setcookie("tercih_renk", "mavi", $gecerlilik_suresi);
echo "Tercih edilen renk 'mavi' olarak cookie'ye kaydedildi.<br>";
if (isset($_COOKIE["tercih_renk"])) {
echo "Kaydedilen tercihiniz: " . $_COOKIE["tercih_renk"];
} else {
echo "Renk tercihiniz kayıtlı değil.";
}
?>
</body>
</html>
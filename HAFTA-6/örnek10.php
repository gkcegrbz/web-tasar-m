<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
$gun_kodu = "Car"; 
switch ($gun_kodu) {
case "Pzt":
echo "Bugün Pazartesi.";
break;
case "Sal":
echo "Bugün Salı.";
break;
case "Car":
echo "Bugün Çarşamba.";
break;
case "Per":
echo "Bugün Perşembe.";
break;
case "Cum":
echo "Bugün Cuma.";
break;
case "Cmt":
case "Pzr": 
echo "Hafta sonu!";
break;
default: 
echo "Geçersiz gün kodu.";
break;
}
?>
</body>
</html>
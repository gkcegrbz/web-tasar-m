<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
$sayac = 10;
while ($sayac < 5) {
echo "Bu yazı hiç görünmeyecek.";
$sayac++;
}
echo "<hr>";

do {
echo "Sayaç: $sayac (Koşul yanlış olsa bile 1 kez çalıştı) <br>";
$sayac++;
} while ($sayac < 5); 
?>
</body>
</html>
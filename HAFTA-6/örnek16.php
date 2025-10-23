<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
function karesiniAl($n) {
return $n * $n;
}
$sayilar = [1, 2, 3, 4, 5];
$kareler = array_map("karesiniAl", $sayilar);
print_r($kareler);

?>
</body>
</html>

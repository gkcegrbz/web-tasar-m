<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<?php
$yas = 19;
if ($yas >= 18) {
echo "Ehliyet alabilirsiniz.";
} elseif ($yas >= 16) {
echo "Ehliyet alamazsınız ama stajyer ehliyet için başvurabilirsiniz.";
} else {
echo "Ehliyet alamazsınız.";
}
echo "<hr>"; 
?>, initial-scale= ">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
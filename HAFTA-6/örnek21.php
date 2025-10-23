
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
$dosya_adi = "gunluk.txt";
$icerik = "Bugün " . date("d.m.Y H:i:s") . " tarihinde log kaydı tutuldu.\n";

file_put_contents($dosya_adi, $icerik);

$yeni_icerik = "İkinci log kaydı.\n";
file_put_contents($dosya_adi, $yeni_icerik, FILE_APPEND);

if (file_exists($dosya_adi)) { 
$okunan_veri = file_get_contents($dosya_adi);
echo "<h3>Günlük Dosyası İçeriği</h3>";
echo nl2br($okunan_veri);
} else {
echo "Dosya bulunamadı.";
}
?>
</body>
</html>
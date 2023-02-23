<?

$tovar = $_POST['tovar'];
$narx = $_POST['narx'];
$receiptName = $_POST['receipt__name'];
$receiptPhone = $_POST['receipt__phone'];
$token = "6135510907:AAE5kMJkr-ZQY42Utm3SONPIFqZDJENC6_o";
$chat_id = "-829308819";
$arr = array(
  'Имя товара: ' => $tovar,
  'Итоговая цена: ' => $narx,
  'Имя: '  => $receiptName,
  'Номер телефона: ' => $receiptPhone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
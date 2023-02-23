<?

/* https://api.telegram.org/bot6135510907:AAE5kMJkr-ZQY42Utm3SONPIFqZDJENC6_o/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user__name'];
$phone = $_POST['user__phone'];
// $price = $_POST['price'];
// $major = $_POST['major'];
$token = "6135510907:AAE5kMJkr-ZQY42Utm3SONPIFqZDJENC6_o";
$chat_id = "-829308819";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone, 
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

<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];


// Формирование самого письма при заполнением пользователем формы в футере
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обрашение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br> $message<br><br>
<b>Электронная почта:</b> $email
";



// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
	//  $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'kats.glo.academy@gmail.com'; // Логин на почте
    $mail->Password   = 'hmfetmp$#g'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('kats.glo.academy@gmail.com', 'ilona Kats'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('ilona.itc@gmail.com');



	 // Отправка сообщения
	 $mail->isHTML(true);
	 $mail->Subject = $title;
	 $mail->Body = $body;

   // Проверяем отправленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header('Location: thankyou.html');
// -------------------------------------------------------------------------------------------



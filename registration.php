<?php
session_start();
$error_message = "";
if (isset($_SESSION["error"])) {
    $error_message = $_SESSION["error"];
    unset($_SESSION["error"]);
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация</title>
    <link rel="stylesheet" href="Styles/font-awesome.min.css">
    <link rel="stylesheet" href="Styles/style.css">
    <link id="Theme_link" rel="stylesheet" href="Styles/light_theme.css">
</head>
<body>
    <div class="main">
        <h2>Регистрация</h2>
        <form action="registrationbd.php" method="post">
            <div class="field">
                <input class="input_with_icon" id="Email" name="Email" type="email" placeholder="Почта">
                <i class="fa fa-envelope icon_in" aria-hidden="true"></i>
            </div>
            <div class="field">
                <input class="input_with_icon" id="Username" name="Username" type="text" placeholder="Никнейм">
                <i class="fa fa-user-circle icon_in" aria-hidden="true"></i>
            </div>
            <div class="field">
                <input class="input_with_icon" id="Password" name="Password" type="password" placeholder="Пароль">
                <i class="fa fa-lock icon_in_small" aria-hidden="true"></i>
            </div>
            <?php
                echo "<p>" . $error_message . "</p>";
            ?>
            <div class="field">
                <input class="submit_input" id="Register" name="Register" type="submit" value="Регистрация">
                <a id="Authorization" href="index.php">Авторизация</a>
            </div>
        </form>
    </div>
    <div class="site_style">
        <input id="Theme_changer" type="submit" value="Light">
    </div>
    <script src="js_scripts/on_load.js"></script>
    <script src="js_scripts/theme_change.js"></script>
</body>
</html>
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
    <title>Авторизация</title>
    <link rel="stylesheet" href="Styles/font-awesome.min.css">
    <link rel="stylesheet" href="Styles/style.css">
    <link id="Theme_link" rel="stylesheet" href="Styles/light_theme.css">
</head>
<body>
    <div class="main"> 
        <h2>Авторизация</h2>
        <form action="authorization.php" method="post">
            <div class="field">
                <input class="input_with_icon" id="Username_Email" name="Username_Email" type="text" placeholder="Никнейм или почта">
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
                <input class="submit_input" id="Log_in" type="submit" value="Войти">
                <a id="Registration" href="registration.php">Регистрация</a>
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
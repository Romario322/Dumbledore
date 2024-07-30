<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="Styles/font-awesome.min.css">
    <link rel="stylesheet" href="Styles/style.css">
    <link id="Theme_link" rel="stylesheet" href="Styles/light_theme.css">
</head>
<body>
    <div class="main">
        <h2>Registration</h2>
        <form action="registrationbd.php" method="post">
            <div class="field">
                <input class="input_with_icon" id="Email" name="Email" type="email" placeholder="Email">
                <i class="fa fa-envelope icon_in" aria-hidden="true"></i>
            </div>
            <div class="field">
                <input class="input_with_icon" id="Username" name="Username" type="text" placeholder="Username">
                <i class="fa fa-user-circle icon_in" aria-hidden="true"></i>
            </div>
            <div class="field">
                <input class="input_with_icon" id="Password" name="Password" type="password" placeholder="Password">
                <i class="fa fa-lock icon_in_small" aria-hidden="true"></i>
            </div>
            <div class="field">
                <input class="submit_input" id="Register" name="Register" type="submit" value="Sign up">
                <a id="Authorization" href="index.php">Log in</a>
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
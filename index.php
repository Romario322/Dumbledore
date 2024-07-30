<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authorization</title>
    <link rel="stylesheet" href="Styles/font-awesome.min.css">
    <link rel="stylesheet" href="Styles/style.css">
    <link id="Theme_link" rel="stylesheet" href="Styles/light_theme.css">
</head>
<body>
    <div class="main"> 
        <h2>Authorization</h2>
        <form action="authorization.php" method="post">
            <div class="field">
                <input class="input_with_icon" id="Username_Email" name="Username_Email" type="text" placeholder="Username or Email">
                <i class="fa fa-user-circle icon_in" aria-hidden="true"></i>
            </div>
            <div class="field">
                <input class="input_with_icon" id="Password" name="Password" type="password" placeholder="Password">
                <i class="fa fa-lock icon_in_small" aria-hidden="true"></i>
            </div>
            <div class="field">
                <input class="submit_input" id="Log_in" type="submit" value="Log in">
                <a id="Registration" href="registration.php">Sign up</a>
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
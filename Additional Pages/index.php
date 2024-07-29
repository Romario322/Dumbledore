<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="../Styles/font-awesome.min.css">
    <link rel="stylesheet" href="../Styles/style.css">
    <link id="Theme_link" rel="stylesheet" href="../Styles/light_theme.css">
</head>
<body>
    <div class="main">
        <h1>Sign up</h1>
        <div class="field">
            <input class="input_with_icon" id="Email" type="email" placeholder="Email">
            <i class="fa fa-envelope icon_in" aria-hidden="true"></i>
        </div>
        <div class="field">
            <input class="input_with_icon" id="Username" type="text" placeholder="Username">
            <i class="fa fa-user-circle icon_in" aria-hidden="true"></i>
        </div>
        <div class="field">
            <input class="input_with_icon" id="Password" type="password" placeholder="Password">
            <i class="fa fa-lock icon_in_small" aria-hidden="true"></i>
        </div>
        <div class="field">
            <input id="Register" type="submit" value="Register">
        </div>
        <div class="field">
            <a href="../index.html"><input id="Authorization" type="submit" value="Log in"></a>
        </div>
    </div>
    <div class="site_style">
        <input id="Theme_changer" type="submit" value="Light">
    </div>
    <script src="../js_scripts/on_load.js"></script>
    <script src="../js_scripts/theme_change.js"></script>
</body>
</html>
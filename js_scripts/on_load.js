let getCookie = function(cookie_name){
    let name = cookie_name + "=";
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++){
        c = cookies[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
        }
    }
    return "NaN";
}

let Theme_link = document.getElementById("Theme_link");
let theme_changer = document.getElementById("Theme_changer");

let selected_theme = getCookie("Theme");

try{
    Theme_link.removeAttribute('href');
    Theme_link.setAttribute("href", selected_theme);
    console.log(selected_theme);
    if (selected_theme == "../Styles/dark_theme.css"){
        theme_changer.textContent = "Dark";
    }
}
catch{}
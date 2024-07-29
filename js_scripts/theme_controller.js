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

let theme_btn = document.getElementById("Theme");
let selected_theme = getCookie("Theme");

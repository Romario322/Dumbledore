let body = document.getElementById("body");
let text = document.querySelectorAll("p, h1, h2");
let columns = document.getElementsByClassName("column_3");

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
    return 0;
}

let color_background = getCookie("color_background");
let color_text = getCookie("color_text");
let color_ui = getCookie("color_ui");

try {
    color_change_background.value = color_background;
    color_change_text.value = color_text;
    color_change_ui.value = color_ui;
}
catch{}

body.style.background = color_background;
for (let i = 0; i < text.length; i++){
    text[i].style.color = color_text;
}
for (let i = 0; i < columns.length; i++){
    columns[i].style.color = color_text;
}
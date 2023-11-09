let body = document.getElementById("body");
let text = document.querySelectorAll("p, h1, h2");
let special_text = document.querySelectorAll("button, #result, #prom, #action, #mem");
let ui = document.querySelectorAll("button, .calc_field");
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
    return "NaN";
}

let color_background = getCookie("color_background");
let color_text = getCookie("color_text");
let special_color_text = getCookie("special_color_text");
let color_ui = getCookie("color_ui");
let border_color_ui = getCookie("border_color_ui");

try {
    color_change_background.value = color_background;
    color_change_text.value = color_text;
    special_color_change_text.value = special_color_text;
    color_change_ui.value = color_ui;
    border_color_change_ui.value = border_color_ui;
}
catch{}

body.style.background = color_background;
for (let i = 0; i < text.length; i++){
    text[i].style.color = color_text;
}
for (let i = 0; i < columns.length; i++){
    columns[i].style.color = color_text;
}
for (let i = 0; i < special_text.length; i++){
    special_text[i].style.color = special_color_text;
}
for (let i = 0; i < ui.length; i++){
    ui[i].style.background = color_ui;
    if(window.innerWidth <= 425){
        ui[i].style.border = "solid 0.05vw" + border_color_ui;
    }
    else{
        ui[i].style.border = "solid 0.1vw" + border_color_ui;
    }
}
let color_change_background = document.getElementById("color_change_background");
let color_change_text = document.getElementById("color_change_text");
let special_color_change_text = document.getElementById("special_color_change_text");
let color_change_ui = document.getElementById("color_change_ui");
let border_color_change_ui = document.getElementById("border_color_change_ui");

color_change_background.onchange = function(){
    document.cookie = `color_background= ${this.value}; path=/; max-age=${3600*24*7}`;
}

color_change_text.onchange = function(){
    document.cookie = `color_text= ${this.value}; path=/; max-age=${3600*24*7}`;
}

special_color_change_text.onchange = function(){
    document.cookie = `special_color_text= ${this.value}; path=/; max-age=${3600*24*7}`;
}

color_change_ui.onchange = function(){
    document.cookie = `color_ui= ${this.value}; path=/; max-age=${3600*24*7}`;
}

border_color_change_ui.onchange = function(){
    document.cookie = `border_color_ui= ${this.value}; path=/; max-age=${3600*24*7}`;
}
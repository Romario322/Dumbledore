try{
    let theme_changer = document.getElementById("Theme_changer");
    let Theme_link = document.getElementById("Theme_link");
}
catch{}
theme_changer.onclick = function(){
    location.reload();
    let theme = Theme_link.getAttribute("href");
    if (theme == "Styles/light_theme.css") {
        theme_changer.textContent = "Dark";
        document.cookie = `Theme= ${"Styles/dark_theme.css"}; path=/; max-age=${3600*24*30}`;
        Theme_link.removeAttribute('href');
        Theme_link.setAttribute("href", "Styles/dark_theme.css");
    }
    else{
        theme_changer.textContent = "Light";
        document.cookie = `Theme= ${"Styles/light_theme.css"}; path=/; max-age=${3600*24*30}`;
        Theme_link.removeAttribute('href');
        Theme_link.setAttribute("href", "Styles/light_theme.css");
    }
}
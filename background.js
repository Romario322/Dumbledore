let body = document.getElementById("body")
let deg = Math.floor(Math.random() * 360)
let colors = ["rgb(216, 36, 12), 20%, rgb(63, 9, 77), 80%, rgb(5, 184, 145)",
              "rgb(114, 9, 175), 30%, rgb(8, 160, 89), 70%, rgb(148, 139, 14)"]
let color = colors[Math.floor(Math.random() * colors.length)]

setInterval(function(){
    body.style.background = `linear-gradient(${deg}deg, ${color}) fixed`
    deg += 0.05
}, 10)

let body = document.getElementById("body")
let deg = 30

setInterval(function(){
    body.style.background = `linear-gradient(${deg}deg, rgb(216, 36, 12), 20%, rgb(63, 9, 77), 80%, rgb(5, 184, 145)) fixed`
    deg += 0.05
}, 10)
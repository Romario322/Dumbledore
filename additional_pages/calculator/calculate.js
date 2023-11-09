let current_num = "0";
let stack_num = "";
let action = "";
let cur_num_text = document.getElementById("result");
let stack_num_text = document.getElementById("prom");
let action_text = document.getElementById("action");
let mem = document.getElementById("mem");

let num_buttons = document.getElementsByClassName("button_num");
let action_buttons = document.getElementsByClassName("button_action");
let once_buttons = document.getElementsByClassName("button_once");

function update_num(){
    cur_num_text.textContent = current_num;
    stack_num_text.textContent = stack_num;
    action_text.textContent = action;
}

function update_mem(){
    mem.textContent = `m ${getCookie("memory_calc")}`;
}

document.cookie=`memory_calc=0; path=/; max-age=${3600*1}`;

document.getElementById("mem_plus").onclick = function(){
    document.cookie=`memory_calc=${String(parseFloat(getCookie("memory_calc")) + parseFloat(current_num))}; path=/; max-age=${3600*24*1}`;
    update_mem()
}

document.getElementById("mem_minus").onclick = function(){
    document.cookie=`memory_calc=${String(parseFloat(getCookie("memory_calc")) - parseFloat(current_num))}; path=/; max-age=${3600*24*1}`;
    update_mem()
}

document.getElementById("mem_read").onclick = function(){
    current_num = getCookie("memory_calc");
    update_num();
}

document.getElementById("mem_clear").onclick = function(){
    document.cookie=`memory_calc=0; path=/; max-age=${3600*1}`;
    update_mem()
}

for (let i = 0; i < num_buttons.length; i++){
    let num_button = num_buttons[i];
    num_button.onclick = function(){
        (current_num === "0")?current_num = num_button.textContent:current_num += num_button.textContent;
        update_num();
    }
}

document.getElementById("button_zero").onclick = function(){
    (current_num !== "0")?current_num += "0":current_num=current_num;
    update_num();
}

for (let i = 0; i < action_buttons.length; i++){
    let action_button = action_buttons[i];
    action_button.onclick = function(){
        if(current_num[current_num.length-1] != "."){
                if (action === ""){
                stack_num = current_num;
                current_num = "0";
            }
            action = action_button.textContent;
            update_num();
        }
    }
}

for (let i = 0; i < once_buttons.length; i++){
    let once_button = once_buttons[i];
    once_button.onclick = function(){
    current_num = parseFloat(current_num);
        if (action == ""){
            switch (once_button.textContent){
                case "cos":
                    current_num = Math.cos(current_num);
                    break;
                case "acos":
                    current_num = Math.acos(current_num);
                    break;
                case "sin":
                    current_num = Math.sin(current_num);
                    break;
                case "asin":
                    current_num = Math.asin(current_num);
                    break;
                case "tg":
                    current_num = Math.tan(current_num);
                    break;
                case "atg":
                    current_num = Math.atan(current_num);
                    break;
                case "ctg":
                    current_num = 1/Math.tan(current_num);
                    break;
                case "actg":
                    current_num = 1/Math.atan(current_num);
                    break;
            }
            current_num = String(Math.round(current_num * 1000000000000) / 1000000000000);
            update_num(); 
        }   
    }
}

document.getElementById("button_e").onclick = function(){
    (current_num === "0")?current_num = String(Math.E):current_num = String(parseFloat(current_num) * Math.E);
    update_num();
}

document.getElementById("button_pi").onclick = function(){
    (current_num === "0")?current_num = String(Math.PI):current_num = String(parseFloat(current_num) * Math.PI);
    update_num();
}
document.getElementById("button_point").onclick = function(){
    (current_num.indexOf(".") === -1)?current_num = current_num + ".":current_num=current_num;
    update_num();
}

document.getElementById("button_+/-").onclick = function(){
    if (current_num !== "0"){
        (current_num[0] === "-")?current_num = current_num.slice(1, current_num.length):current_num = "-" + current_num;
        update_num();
    }
}

document.getElementById("button_del").onclick = function(){
    (current_num.length != 1)?current_num = current_num.slice(0,current_num.length-1):current_num="0";
    update_num();
}

document.getElementById("button_clear").onclick = function(){
    current_num = "0";
    stack_num = "";
    action = "";
    update_num();
}

document.getElementById("equals").onclick = function(){
    if (action !== ""){
        current_num = parseFloat(current_num);
        stack_num = parseFloat(stack_num);
        switch (action){
            case "+":
                current_num = stack_num + current_num;
                break;
            case "-":
                current_num = stack_num - current_num;
                break;
            case "×":
                current_num = stack_num * current_num;
                break;
            case "÷":
                current_num = stack_num / current_num;
                break;
            case "^":
                current_num = Math.pow(stack_num,current_num);
                break;
            case "√":
                current_num = Math.pow(stack_num, 1/current_num);
                break;
            case "log":
                current_num = Math.log(stack_num)/Math.log(current_num);
                break;
        }
        current_num = String(Math.round(current_num * 1000000000000) / 1000000000000);
        action = "";
        stack_num = "";
        update_num();    
    }
}
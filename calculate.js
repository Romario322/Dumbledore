let current_number = '0';
let stack_number = '';
let action = '';
function update_number(){
    document.getElementById("result").innerHTML = current_number
}
document.getElementById("button_clear").onclick = function(){
    (current_number !== "0")?current_number = '0':current_number = current_number
    if (stack_number !== ""){
        stack_number = ''
    }
    update_number()
}
document.getElementById("button_del").onclick = function(){
    (current_number !== "0" && current_number.length !== 1)?current_number = current_number.slice(0, -1):(current_number !== "0")?current_number = '0':current_number = current_number
    update_number()
}
document.getElementById("button_1").onclick = function(){
    (current_number === "0")?current_number = '1':current_number += '1'
    update_number()
}
document.getElementById("button_2").onclick = function(){
    (current_number === "0")?current_number = '2':current_number += '2'
    update_number()
}
document.getElementById("button_3").onclick = function(){
    (current_number === "0")?current_number = '3':current_number += '3'
    update_number()
}
document.getElementById("button_4").onclick = function(){
    (current_number === "0")?current_number = '4':current_number += '4'
    update_number()
}
document.getElementById("button_5").onclick = function(){
    (current_number === "0")?current_number = '5':current_number += '5'
    update_number()
}
document.getElementById("button_6").onclick = function(){
    (current_number === "0")?current_number = '6':current_number += '6'
    update_number()
}
document.getElementById("button_7").onclick = function(){
    (current_number === "0")?current_number = '7':current_number += '7'
    update_number()
}
document.getElementById("button_8").onclick = function(){
    (current_number === "0")?current_number = '8':current_number += '8'
    update_number()
}
document.getElementById("button_9").onclick = function(){
    (current_number === "0")?current_number = '9':current_number += '9'
    update_number()
}
document.getElementById("button_0").onclick = function(){
    (current_number !== "0")?current_number += '0':current_number = current_number
    update_number()
}
document.getElementById("button_.").onclick = function(){
    (current_number.indexOf('.') === -1)?current_number += '.':current_number = current_number
    update_number()
}

document.getElementById("button_+").onclick = function(){
    action = '+'
    if (stack_number.length === 0){
        stack_number = current_number
        current_number = '0'
    }
    update_number()
}
document.getElementById("button_-").onclick = function(){
    action = '-'
    if (stack_number.length === 0){
        stack_number = current_number
        current_number = '0'
    }
    update_number()
}
document.getElementById("button_*").onclick = function(){
    action = '*'
    if (stack_number.length === 0){
        stack_number = current_number
        current_number = '0'
    }
    update_number()
}
document.getElementById("button_/").onclick = function(){
    action = '/'
    if (stack_number.length === 0){
        stack_number = current_number
        current_number = '0'
    }
    update_number()
}


document.getElementById("button_=").onclick = function(){
    if (stack_number !== ''){
        switch(action){
            case '+':
                current_number = String(parseFloat(stack_number) + parseFloat(current_number))
                stack_number = ''
                break    
            case '-':
                current_number = String(parseFloat(stack_number) - parseFloat(current_number))
                stack_number = ''
                break
            case '*':
                current_number = String(parseFloat(stack_number) * parseFloat(current_number))
                stack_number = ''
                break
            case '/':
                current_number = String(parseFloat(stack_number) / parseFloat(current_number))
                stack_number = ''
                break
        }
        update_number()
    }
}
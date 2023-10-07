let current_number = '0'
let stack_number = ''
let action = ''
let num_buttons = document.getElementsByClassName("button_num")
let action_buttons = document.getElementsByClassName("button_action")

function update_number(){
    document.getElementById("result").innerHTML = current_number
}

for (let i = 0; i < num_buttons.length; i++){
    let num_button = num_buttons[i]
    num_button.onclick = function(){
        (current_number === "0")?current_number = num_button.textContent:current_number += num_button.textContent
        update_number()
    }
}

for (let i = 0; i < action_buttons.length; i++){
    let action_button = action_buttons[i]
    action_button.onclick = function(){
        action = action_button.textContent
        if (stack_number.length === 0){
            stack_number = current_number
            current_number = '0'
        }
        update_number()
    }
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
document.getElementById("button_0").onclick = function(){
    (current_number !== "0")?current_number += '0':current_number = current_number
    update_number()
}
document.getElementById("button_.").onclick = function(){
    (current_number.indexOf('.') === -1)?current_number += '.':current_number = current_number
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
            case '×':
                current_number = String(parseFloat(stack_number) * parseFloat(current_number))
                stack_number = ''
                break
            case '÷':
                current_number = String(parseFloat(stack_number) / parseFloat(current_number))
                stack_number = ''
                break
        }
        update_number()
    }
}

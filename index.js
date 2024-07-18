let currentNumber = '';



document.addEventListener("DOMContentLoaded", function(){
    const btnNumbers=document.querySelectorAll('.num');
    const btnOperators=document.querySelectorAll('.op');

    const btnEqual=document.querySelector('#equals');
    const btnClear=document.querySelector('#clear');
    const btnDot=document.querySelector("#btnDot");

    const previousScreen=document.querySelector(".previous");
    const currentScreen=document.querySelector(".current");

    btnNumbers.forEach((num)=>num.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentNumber;
    }))

});


function handleNumber(num){
    if(currentNumber.length <7){
        currentNumber += num;
    }
    
}
















let operand1 = null;
let operand2 = null;
let operator = null;

















function operate(operand1, operator, operand2){
    if(operator==='+'){
        return addNumbers(operand1, operand2);
    }
    else if(operator==='-'){
        return subtractNumbers(operand1, operand2);
    }
    else if(operator==='*'){
        return multiplyNumbers(operand1, operand2);
    }
    else if(operator==='/'){
        return divideNumbers(operand1, operand2);
    }
}



function addNumbers(operand1, operand2){
    return operand1+operand2;
}

function subtractNumbers(operand1, operand2){
    return operand1-operand2;
}

function multiplyNumbers(operand1, operand2){
    return operand1*operand2;
}

function divideNumbers(operand1, operand2){
    return operand1/operand2;
}

operand1 = 1000;
operand2 = 2000;
operator = '/';

console.log(addNumbers(operand1, operand2));
console.log(subtractNumbers(operand1, operand2));
console.log(multiplyNumbers(operand1, operand2));
console.log(divideNumbers(operand1, operand2));

console.log(operate(operand1, operator, operand2));



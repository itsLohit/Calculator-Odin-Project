let previousScreenValue = "";
let currentScreenValue = "";
let operator = "";
let opCount = 0;




document.addEventListener("DOMContentLoaded", function(){
    const btnNumbers=document.querySelectorAll(".num");
    const btnOperators=document.querySelectorAll(".op");

    const btnEqual=document.querySelector("#equals");
    const btnClear=document.querySelector("#clear");
    const btnDot=document.querySelector("#btnDot");

    const previousScreen=document.querySelector(".previous");
    const currentScreen=document.querySelector(".current");

    btnNumbers.forEach((num) => num.addEventListener("click", (e)=>{
        if(currentScreenValue.length < 7){
            currentScreenValue += e.target.textContent;
        }
        currentScreen.textContent = currentScreenValue;
    }));

    btnOperators.forEach((op)=>op.addEventListener("click", (e)=>{
        
        if(opCount>0){
            console.log("Success");
            operator = e.target.textContent;
            currentScreen.textContent = previousScreenValue+ " " + operator;

        }
        opCount+=1;
        operator = e.target.textContent;
        previousScreenValue = currentScreenValue;
        currentScreenValue = "";
        currentScreen.textContent = "";
        previousScreen.textContent = previousScreenValue+ " " +operator; 
        console.log("opCount"+opCount)
    }));

    btnEqual.addEventListener("click", ()=>{
        previousScreen.textContent = previousScreenValue + " " + operator + " " + currentScreenValue;
        previousScreenValue = Number(previousScreenValue);
        currentScreenValue = Number(currentScreenValue);
        previousScreenValue = operate(previousScreenValue, operator, currentScreenValue);
        currentScreen.textContent = previousScreenValue;
        console.log(previousScreenValue);
    });


    btnClear.addEventListener("click", ()=>{
        previousScreenValue = "";
        currentScreenValue = "";
        operator = "";
        currentScreen.textContent = currentScreenValue;
        previousScreen.textContent = currentScreenValue;
        
    })

    
});









function operate(operand1, operator, operand2){
    if(operator==="+"){
        return addNumbers(operand1, operand2);
    }
    else if(operator==="-"){
        return subtractNumbers(operand1, operand2);
    }
    else if(operator==="*"){
        return multiplyNumbers(operand1, operand2);
    }
    else if(operator==="/"){
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







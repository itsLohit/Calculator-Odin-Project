let previousScreenValue = "";
let currentScreenValue = "";
let operator = "";
let operatorIndicator = 0;
let equalsIndicator = 0;
let dotIndicator = 0;




document.addEventListener("DOMContentLoaded", function(){
    const btnNumbers=document.querySelectorAll(".num");
    const btnOperators=document.querySelectorAll(".op");

    const btnEqual=document.querySelector("#equals");
    const btnClear=document.querySelector("#clear");
    const btnDot=document.querySelector("#btnDot");
    const btnBS=document.querySelector("#backspace");

    const previousScreen=document.querySelector(".previous");
    const currentScreen=document.querySelector(".current");

    

    btnNumbers.forEach((num) => num.addEventListener("click", (e)=>{
        if(currentScreenValue.length < 9){
            currentScreenValue += e.target.textContent;
        }
        currentScreen.textContent = currentScreenValue;
    }));

    btnDot.addEventListener("click", (e)=>{
        if(dotIndicator==0){
            currentScreenValue += e.target.textContent;
            currentScreen.textContent = currentScreenValue;
            dotIndicator = 1;
        }
    });

    btnOperators.forEach((op)=>op.addEventListener("click", (e)=>{

        dotIndicator = 0;
        
        if((equalsIndicator==0) && (operatorIndicator==0)){
            operator = e.target.textContent;
            previousScreenValue = currentScreenValue;
            currentScreenValue = "";
            currentScreen.textContent = "";
            previousScreen.textContent = previousScreenValue+ " " +operator;
            operatorIndicator = 1; 
            console.log(operatorIndicator);
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
        else if((operatorIndicator==1) && (equalsIndicator==1)){
            previousScreenValue = operate(previousScreenValue, operator, currentScreenValue);
            currentScreenValue = "";
            currentScreen.textContent = currentScreenValue;
            operator = e.target.textContent;
            previousScreen.textContent = previousScreenValue + " " + operator;
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
        else if((equalsIndicator>0) && (operatorIndicator>0)){
            operator = e.target.textContent;
            previousScreen.textContent = previousScreenValue + " " + operator;
            currentScreenValue = "";
            currentScreen.textContent = currentScreenValue;
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
        else if((operatorIndicator==1) && (equalsIndicator==0)){
            previousScreenValue = operate(previousScreenValue, operator, currentScreenValue);
            currentScreenValue = "";
            currentScreen.textContent = currentScreenValue;
            operator = e.target.textContent;
            previousScreen.textContent = previousScreenValue + " " + operator;
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
    }));

    btnEqual.addEventListener("click", ()=>{
        if((previousScreenValue != "") && (currentScreenValue != "")){
            previousScreen.textContent = previousScreenValue+operator+currentScreenValue;
            previousScreenValue = operate(previousScreenValue, operator, currentScreenValue);
            currentScreen.textContent = previousScreenValue;
            equalsIndicator =1;
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
        
    });


    btnClear.addEventListener("click", ()=>{
        previousScreenValue = "";
        currentScreenValue = "";
        operator = "";
        operatorIndicator = 0;
        equalsIndicator = 0;
        dotIndicator = 0;
        currentScreen.textContent = currentScreenValue;
        previousScreen.textContent = currentScreenValue;
    });

    btnBS.addEventListener("click", ()=>{
        currentScreenValue = currentScreenValue.slice(0, currentScreenValue.length - 1);
        currentScreen.textContent = currentScreenValue;
    })

    window.addEventListener("keydown", e => {
        const key = e.key;
        if (!isNaN(key) || key === '.') {
            if(currentScreenValue.length < 9){
                currentScreenValue += String(key);
            }
            currentScreen.textContent = currentScreenValue;
        }
        else if (key === '+' || key === '-' || key === '*' || key === '/') {
            dotIndicator = 0;
        
        if((equalsIndicator==0) && (operatorIndicator==0)){
            operator = key;
            previousScreenValue = currentScreenValue;
            currentScreenValue = "";
            currentScreen.textContent = "";
            previousScreen.textContent = previousScreenValue+ " " +operator;
            operatorIndicator = 1; 
            console.log(operatorIndicator);
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
        else if((operatorIndicator==1) && (equalsIndicator==1)){
            previousScreenValue = operate(previousScreenValue, operator, currentScreenValue);
            currentScreenValue = "";
            currentScreen.textContent = currentScreenValue;
            operator = key;
            previousScreen.textContent = previousScreenValue + " " + operator;
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
        else if((equalsIndicator>0) && (operatorIndicator>0)){
            operator = key;
            previousScreen.textContent = previousScreenValue + " " + operator;
            currentScreenValue = "";
            currentScreen.textContent = currentScreenValue;
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
        else if((operatorIndicator==1) && (equalsIndicator==0)){
            previousScreenValue = operate(previousScreenValue, operator, currentScreenValue);
            currentScreenValue = "";
            currentScreen.textContent = currentScreenValue;
            operator = key;
            previousScreen.textContent = previousScreenValue + " " + operator;
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
        }
        else if (key === 'Enter') {
            e.preventDefault(); // Prevent form submission if inside a form
            if((previousScreenValue != "") && (currentScreenValue != "")){
                previousScreen.textContent = previousScreenValue+operator+currentScreenValue;
                previousScreenValue = operate(previousScreenValue, operator, currentScreenValue);
                currentScreen.textContent = previousScreenValue;
                equalsIndicator =1;
                if (previousScreenValue>999999999 || currentScreenValue>999999999){
                    previousScreen.textContent = "Can't ";
                    currentScreen.textContent = "hold!";
                }
            }
        }
        else if (key === 'Backspace') {
            currentScreenValue = currentScreenValue.slice(0, currentScreenValue.length - 1);
            currentScreen.textContent = currentScreenValue;
        } 
        else if (key==='Escape') {
            previousScreenValue = "";
            currentScreenValue = "";
            operator = "";
            operatorIndicator = 0;
            equalsIndicator = 0;
            dotIndicator = 0;
            currentScreen.textContent = currentScreenValue;
            previousScreen.textContent = currentScreenValue;
        }

    });

    
});



function operate(operand1, operator, operand2){
    operand1 = Number(operand1);
    operand2 = Number(operand2);

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
        if(operand1==0){
            return "ERROR";
        }
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
    return Math.round((operand1*operand2)*1000000)/1000000;
}

function divideNumbers(operand1, operand2){
    return Math.round((operand1/operand2)*1000000)/1000000;
}







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
        handleNumbers(e.target.textContent);
    }));

    btnDot.addEventListener("click", (e)=>{
        handleDot(e.target.textContent);
    });

    btnOperators.forEach((op)=>op.addEventListener("click", (e)=>{
        handleOperators(e.target.textContent);
    }));

    btnEqual.addEventListener("click", ()=>{
        handleEquals();
    });

    btnClear.addEventListener("click", ()=>{
        handleClear();
    });

    btnBS.addEventListener("click", ()=>{
        handleBackspace();
    });



    window.addEventListener("keydown", e => {
        const key = e.key;
        if (!isNaN(key)){
            handleNumbers(key);
        }
        else if (key === '+' || key === '-' || key === '*' || key === '/'){
            handleOperators(key);
        }
        else if (key === 'Enter'){
            handleEquals(key);
        }
        else if (key === 'Backspace'){
            handleBackspace(key);
        } 
        else if (key==='Escape'){
            handleClear(key);
        }
        else if (key === '.'){
            handleDot(key);
        }
        else if (key === 'Delete'){
            handleClear(key);
        }
    });



    function handleNumbers(num){
        if(currentScreenValue.length < 9){
            currentScreenValue += num;
        }
        currentScreen.textContent = currentScreenValue;
    }
    
    
    function handleOperators(op){

        dotIndicator = 0;
        
        if((equalsIndicator==0) && (operatorIndicator==0)){
            operator = op;
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
            operator = op;
            previousScreen.textContent = previousScreenValue + " " + operator;
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
        else if((equalsIndicator>0) && (operatorIndicator>0)){
            operator = op;
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
            operator = op;
            previousScreen.textContent = previousScreenValue + " " + operator;
            if (previousScreenValue>999999999 || currentScreenValue>999999999){
                previousScreen.textContent = "Can't ";
                currentScreen.textContent = "hold!";
            }
        }
    }
    
    
    function handleEquals(){
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
    
    
    function handleDot(dot){
        if(dotIndicator==0){
            currentScreenValue += dot;
            currentScreen.textContent = currentScreenValue;
            dotIndicator = 1;
        }
    }
    
    
    function handleClear(){
        previousScreenValue = "";
        currentScreenValue = "";
        operator = "";
        operatorIndicator = 0;
        equalsIndicator = 0;
        dotIndicator = 0;
        currentScreen.textContent = currentScreenValue;
        previousScreen.textContent = currentScreenValue;
    }


    function handleBackspace(){
        currentScreenValue = currentScreenValue.slice(0, currentScreenValue.length - 1);
        currentScreen.textContent = currentScreenValue;
    }
    
    
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





const button = document.querySelectorAll("button");

button.forEach((btn)=>btn.addEventListener("mouseover", function () {

btn.style.background = "#8458B3";
btn.style.color = "#e5eaf5";
}));

button.forEach((btn)=>btn.addEventListener("mouseout", function () {

    btn.style.background = "#d0bdf4";
    btn.style.color = "black";
    }));



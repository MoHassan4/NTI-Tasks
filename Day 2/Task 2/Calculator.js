function EnterNumber(Value){
    let resultScreen = document.getElementById("Answer");
    resultScreen.value+=Value;
}

function EnterOperator(Value){
    let resultScreen = document.getElementById("Answer");
    resultScreen.value+=Value;
}

function EnterEqual(){
    let resultScreen = document.getElementById("Answer");
    let result = eval(resultScreen.value);
    resultScreen.value = result;
    
}

function EnterClear(){
    let resultScreen = document.getElementById("Answer");
    resultScreen.value="";
}
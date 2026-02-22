// Operations
function sum(num1,num2){
    return num1 + num2;
}

function sub(num1,num2){
    return num1 - num2;
}

function div(num1,num2){
    if(num1 === 0 || num2 === 0) return "Error";
    return num1 / num2;
}

function multi(num1,num2){
    return num1 * num2;
}




let num1;
let num2;
let operator;

const operations = {
    "+": sum,
    "-": sub,
    "*": multi,
    "/": div
};

function operate(operator,num1,num2){
    if (!operations[operator]) {
        return "Error";
    }
    return operations[operator](num1,num2);
}

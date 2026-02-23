
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Error" : a / b);


const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
};


let num1 = "";
let num2 = "";
let operator = "";

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");


function operate(op, n1, n2) {
    if (!operations[op]) return "Error";
    return operations[op](n1, n2);
}


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const key = e.target.textContent.trim();
        const target = e.target;

        
        if (target.id === "clear") {
            num1 = ""; num2 = ""; operator = "";
            display.textContent = "0";
            return;
        }

        
        if (target.id === "delete") {
            if (operator === "") {
                num1 = num1.slice(0, -1);
                display.textContent = num1 || "0";
            } else {
                num2 = num2.slice(0, -1);
                display.textContent = num2 || "0";
            }
            return;
        }

     
        if (target.classList.contains("operator") && target.id !== "equals") {
            if (num1 !== "") {
                operator = key;
            }
            return;
        }

        
        if (target.id === "equals") {
            if (num1 !== "" && num2 !== "" && operator !== "") {
                const result = operate(operator, parseFloat(num1), parseFloat(num2));
                display.textContent = result;
               
                num1 = result.toString();
                num2 = "";
                operator = "";
            }
            return;
        }

       
        if (operator === "") {
            num1 += key;
            display.textContent = num1;
        } else {
            num2 += key;
            display.textContent = num2;
        }
    });
});
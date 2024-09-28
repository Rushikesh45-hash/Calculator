let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let currentInput = '';  
let operator = '';     
let previousInput = ''; 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.textContent;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === '=') {
            if (previousInput && currentInput && operator) {
                let result = eval(previousInput + operator + currentInput);
                display.value = result;
                previousInput = result; 
                currentInput = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';  
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

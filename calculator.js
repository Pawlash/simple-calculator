let input = document.querySelector(".input");
let result = '';
// Logical operations
function add() {
    result += input.textContent + '+';
    input.textContent = '';
}

function subtract() {
    result += input.textContent + '-';
    input.textContent = '';
}

function multiply() {
    result += input.textContent + '*';
    input.textContent = '';
}

function divide() {
    result += input.textContent + '/';
    input.textContent = '';
}

function remainder() {
    result += input.textContent + '%';
    input.textContent = '';
}

function calculateResult() {
    try {
        result += input.textContent;
        input.textContent = math.evaluate(result);
        result = '';
    } catch (e) {
        input.textContent = 'Error';
    }
}

// Additional functions
function clear() {
    input.textContent = '';
    result = '';
}

function backspace() {
    input.textContent = input.textContent.slice(0, -1);
}

function dot(){
    input.textContent += '.';
}
// Visual logic

function updateDisplay(value) {
    input.textContent += value;
}

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const dotButton = document.querySelector('.dot');
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const remainderButton = document.querySelector('.remainder');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');

// Add event listeners
zero.addEventListener('click', () => updateDisplay('0'));
one.addEventListener('click', () => updateDisplay('1'));
two.addEventListener('click', () => updateDisplay('2'));
three.addEventListener('click', () => updateDisplay('3'));
four.addEventListener('click', () => updateDisplay('4'));
five.addEventListener('click', () => updateDisplay('5'));
six.addEventListener('click', () => updateDisplay('6'));
seven.addEventListener('click', () => updateDisplay('7'));
eight.addEventListener('click', () => updateDisplay('8'));
nine.addEventListener('click', () => updateDisplay('9'));

dotButton.addEventListener('click', dot);
addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
remainderButton.addEventListener('click', remainder);

equalsButton.addEventListener('click', calculateResult);
clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', backspace);
// Keyboard support
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            updateDisplay(event.key);
            break;
        case '.':
            dot();
            break;
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
            break;
        case '%':
            remainder();
            break;
        case 'Enter': case '=':
            calculateResult();
            break;
        case 'Escape':
            clear();
            break;
        case 'Backspace':
            backspace();
            break;
    }
});
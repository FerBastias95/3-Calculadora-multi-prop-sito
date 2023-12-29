window.onload = function () {
    addInputBox();
}

function addInputBox() {
    var inputBoxes = document.getElementById('inputBoxes');
    var inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.className = 'input pd-2';
    inputBoxes.appendChild(inputBox);
}

function removeInputBox() {
    var inputBoxes = document.getElementById('inputBoxes');
    if (inputBoxes.childElementCount > 0) {
        inputBoxes.removeChild(inputBoxes.lastChild);
    }
}

function addToDisplay(value) {
    var display = document.getElementById('display');
    display.value = value;
}

function calculateResult() {
    var inputBoxes = document.getElementById('inputBoxes');
    var numbers = [];
    var output = document.getElementById('output');
    for (var i = 0; i < inputBoxes.childElementCount; i++) {
        var value = inputBoxes.children[i].value;
        if (!isNaN(parseFloat(value))) {
            numbers.push(parseFloat(value));
        }
    }
    var display = document.getElementById('display');
    var operator = display.value;
    var result = numbers[0];

    switch (operator) {
        case '+':
            for (var i = 1; i < numbers.length; i++) {
                result += numbers[i];
            }
            break;
        case '-':
            for (var i = 1; i < numbers.length; i++) {
                result -= numbers[i];
            }
            break;
        case '*':
            for (var i = 1; i < numbers.length; i++) {
                result *= numbers[i];
            }
            break;
        case '/':
            for (var i = 1; i < numbers.length; i++) {
                result /= numbers[i];
            }
            break;
        case 'Promedio':
            for (var i = 1; i < numbers.length; i++) {
                result += numbers[i];
            }
            result = result / numbers.length;
            break;

        default:
            result = '?';
            break;
    }
    output.value = result;
}
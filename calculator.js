window.onload = function () {
    addInputBox();
}

let UsdToCLPConversionRate;
const apiKey = 'b6a0dc146ba44e9c4cfbfd9d';

function getConversionRateUSDtoCLP() {
    const baseCurrency = 'USD';
    const targetCurrency = 'CLP';

    const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            UsdToCLPConversionRate = data.rates[targetCurrency];

            // Store the conversion rate in a variable or a data attribute
            const conversionRateElement = document.getElementById('conversionRateUSDtoCLP');
            conversionRateElement.textContent = `1 ${baseCurrency} = ${UsdToCLPConversionRate} ${targetCurrency}`;

            // Display the conversion rate in the additional element
            const displayConversionRateElement = document.getElementById('displayConversionRateUSDtoCLP');
            displayConversionRateElement.textContent = `Conversion rate: ${UsdToCLPConversionRate}`;
            console.log('Conversion rate updated')

            UsdToClp();
        })
        .catch(error => {
            console.error('Error fetching conversion rate:', error);
            const conversionRateElement = document.getElementById('conversionRateUSDtoCLP');
            conversionRateElement.textContent = 'Error fetching conversion rate';
        });
}

function UsdToClp(){
    var input = document.getElementById('inputUSD').value;
    var output = document.getElementById('outputCLP');

    if(!isNaN(parseFloat(input))){
        const resultado = input*UsdToCLPConversionRate;
        output.value = resultado;
    }
}

function getConversionRateCLPtoUSD() {
    const baseCurrency = 'USD';
    const targetCurrency = 'CLP';

    const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            UsdToCLPConversionRate = data.rates[targetCurrency];

            // Store the conversion rate in a variable or a data attribute
            const conversionRateElement = document.getElementById('conversionRateCLPtoUSD');
            conversionRateElement.textContent = `1 ${targetCurrency} = ${1/UsdToCLPConversionRate} ${baseCurrency}`;

            // Display the conversion rate in the additional element
            const displayConversionRateElement = document.getElementById('displayConversionRateCLPtoUSD');
            displayConversionRateElement.textContent = `Conversion rate: ${1/UsdToCLPConversionRate}`;
            console.log('Conversion rate updated')

            clpToUsd();
        })
        .catch(error => {
            console.error('Error fetching conversion rate:', error);
            const conversionRateElement = document.getElementById('conversionRateCLPtoUSD');
            conversionRateElement.textContent = 'Error fetching conversion rate';
        });
}

function clpToUsd(){
    var input = document.getElementById('inputCLP').value;
    var output = document.getElementById('outputUSD');

    if(!isNaN(parseFloat(input))){
        const resultado = input*(1/UsdToCLPConversionRate);
        output.value = resultado;
    }
}

function addInputBox() {
    var inputBoxes = document.getElementById('inputBoxes');
    var inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.className = 'form-control';
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
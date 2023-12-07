let UsdToCLPConversionRate;
const apiKey = 'b6a0dc146ba44e9c4cfbfd9d';
const baseCurrency = 'USD';
const targetCurrency = 'CLP';
const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`;

function getConversionRateUSDtoCLP() {
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

function getConversionRateCLPtoUSD() {
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
            clpToUsd();
        })
        .catch(error => {
            console.error('Error fetching conversion rate:', error);
            const conversionRateElement = document.getElementById('conversionRateCLPtoUSD');
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

function clpToUsd(){
    var input = document.getElementById('inputCLP').value;
    var output = document.getElementById('outputUSD');

    if(!isNaN(parseFloat(input))){
        const resultado = input*(1/UsdToCLPConversionRate);
        output.value = resultado;
    }
}

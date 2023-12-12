function simpleInterest() {
    var principal = double.Parse(document.getElementById('inputCapitalSimple'));
    var rate = double.Parse(document.getElementById('inputRateSimple'));
    var time = double.Parse(document.getElementById('inputTiempoSimple'));
    let interest = (principal * rate * time) / 100;
    return interest;
}

// Example usage
let principalAmount = 1000; // Principal amount
let interestRate = 5; // Interest rate per annum
let timePeriod = 2; // Time period in years

let simpleInterestAmount = simpleInterest(principalAmount, interestRate, timePeriod);
console.log('Simple Interest:', simpleInterestAmount);


function compoundInterest(principal, rate, time, frequency) {
    let n = frequency; // Frequency of compounding
    let amount = principal * Math.pow(1 + rate / (n * 100), n * time);
    let interest = amount - principal;
    return interest;
}

// Example usage
let principalAmountCompound = 1000; // Principal amount
let interestRateCompound = 5; // Interest rate per annum
let timePeriodCompound = 2; // Time period in years
let compoundingFrequency = 1; // Compounding frequency annually

let compoundInterestAmount = compoundInterest(principalAmountCompound, interestRateCompound, timePeriodCompound, compoundingFrequency);
console.log('Compound Interest:', compoundInterestAmount);

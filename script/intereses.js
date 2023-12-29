function simpleInterest() {
    var output = document.getElementById('outputCapitalSimple');

    var principal = parseFloat(document.getElementById('inputCapitalSimple').value);
    var rate = parseFloat(document.getElementById('inputRateSimple').value);
    var time = parseFloat(document.getElementById('inputTiempoSimple').value);

    let interest = (principal * rate * time) / 100;

    output.value = principal + interest;
}

function compoundInterest() {
    var principal = parseFloat(document.getElementById('inputCapitalCompuesto').value);
    var rate = parseFloat(document.getElementById('inputRateCompuesto').value);
    var time = parseFloat(document.getElementById('inputTiempoCompuesto').value);
    var frequency = parseFloat(document.getElementById('inputFrecuenciaCompuesto').value);
    
    var output = document.getElementById('outputCapitalCompuesto');

    let n = frequency;

    let amount = principal * Math.pow(1 + rate / (n * 100), n * time);
    let interest = amount - principal;
    output.value = principal + interest;
}

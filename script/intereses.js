function simpleInterest() {
    var principal = double.Parse(document.getElementById('inputCapitalSimple').value);
    var rate = double.Parse(document.getElementById('inputRateSimple').value);
    var time = double.Parse(document.getElementById('inputTiempoSimple').value);
    var output = double.Parse(document.getElementById('outputCapitalSimple').value);
    let interest = (principal * rate * time) / 100;
    output.value = interest;
}

function compoundInterest() {
    var principal = double.Parse(document.getElementById('inputCapitalCompuesto').value);
    var rate = double.Parse(document.getElementById('inputRateCompuesto').value);
    var time = double.Parse(document.getElementById('inputTiempoCompuesto').value);
    var frequency = double.Parse(document.getElementById('inputFrecuenciaCompuesto').value);
    
    var output = document.getElementById('outputCapitalCompuesto');

    let n = frequency;

    let amount = principal * Math.pow(1 + rate / (n * 100), n * time);
    let interest = amount - principal;
    output.value = interest;
}

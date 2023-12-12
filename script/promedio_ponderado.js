window.onload = function () {
    addInputBoxes();
}

function addInputBoxes() {
    var inputBoxes = document.getElementById('inputBoxes');

    // Crea una nueva fila
    var newRow = document.createElement('div');
    newRow.className = 'row';

    // Crea una columna para el primer input, las notas
    var firstCol = document.createElement('div');
    firstCol.className = 'col-md-6';
    var firstInput = document.createElement('input');
    firstInput.type = 'number';
    firstInput.className = 'form-control first-column';
    firstCol.appendChild(firstInput);

    // Crea una segunda columna para el segundo input, las ponderaciones
    var secondCol = document.createElement('div');
    secondCol.className = 'col-md-6';
    var secondInput = document.createElement('input');
    secondInput.type = 'number';
    secondInput.className = 'form-control second-column';
    secondCol.appendChild(secondInput);

    // Agrega las columnas a la fila
    newRow.appendChild(firstCol);
    newRow.appendChild(secondCol);

    // Agrega la fila al contenedor
    inputBoxes.appendChild(newRow);
}

function removeInputBoxes() {
    var inputBoxes = document.getElementById('inputBoxes');

    // Get all rows in the container
    var rows = inputBoxes.querySelectorAll('.row');

    // If there are rows, remove the last row
    if (rows.length > 0) {
        var lastRow = rows[rows.length - 1];
        inputBoxes.removeChild(lastRow);
    }
}


function calculateResult() {
    var valuesArray = [];
    var output = document.getElementById('output');
    var inputsNotas = document.getElementsByClassName('first-column');
    var inputsPonderaciones = document.getElementsByClassName('second-column');
    var result = 0;
    var sumaPonderacion = 0;

    for (var i = 0; i < inputsNotas.length; i++) {
        var firstInput = parseFloat(inputsNotas[i].value);
        var secondInput = parseFloat(inputsPonderaciones[i].value);

        if (!isNaN(firstInput) && !isNaN(secondInput)) {
            valuesArray.push([firstInput, secondInput]);
            result += firstInput*secondInput;
            sumaPonderacion+=secondInput;
        }
    }
    if(sumaPonderacion == 100){
        output.value = result/100;
    } else output.value = "La suma de la ponderación no es igual al 100%";
    
}

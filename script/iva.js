var start = 0;

window.onload = function () {
    addInputBoxes();
}

function updateValorFinals() {
    var rows = document.querySelectorAll('#inputBoxes tr');
    rows.forEach(function(row) {
        var valorOriginalInput = row.querySelector('.valorOriginal');
        var valorFinalInput = row.querySelector('.valorFinal');

        if (valorOriginalInput.value.trim() !== '') {
            calculateValorFinal(row);
        }
    });
}

document.getElementById('valorIVA').addEventListener('input', updateValorFinals);


function addInputBoxes() {
    var inputBoxes = document.getElementById('inputBoxes');
    var newRow = document.createElement('tr');

    // Create and append 4 cells for each row
    for (var i = 0; i < 4; i++) {
        var newCell = document.createElement('td');

        if (i === 0) {
            var firstInput = document.createElement('input');
            firstInput.type = 'text';
            firstInput.className = 'form-control first-column';
            newCell.appendChild(firstInput);
        } else if (i === 1) {
            var numericInput = document.createElement('input');
            numericInput.type = 'number';
            numericInput.className = 'form-control valorOriginal';
            newCell.appendChild(numericInput);
        } else if (i === 2) {
            var numericInput = document.createElement('input');
            numericInput.type = 'number';
            numericInput.className = 'form-control valorFinal';
            numericInput.readOnly = true;
            newCell.appendChild(numericInput);
        } else if (i === 3) {
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn btn-danger';

            // Add trash can icon
            var trashCanIcon = document.createElement('img');
            trashCanIcon.src = 'https://static-00.iconduck.com/assets.00/delete-icon-256x256-9x92mtma.png'; // Replace with the actual path
            trashCanIcon.alt = 'Delete';
            trashCanIcon.style.width = '20px'; // Adjust the width as needed
            trashCanIcon.style.height = '20px'; // Adjust the height as needed
            button.appendChild(trashCanIcon);

            button.addEventListener('click', function() {
                // Check if there is more than one row before removing
                if (inputBoxes.rows.length > 1) {
                    inputBoxes.removeChild(newRow);
                }
            });
            newCell.appendChild(button);
        }

        newRow.appendChild(newCell);
    }

    // Append the new row to the tbody
    inputBoxes.appendChild(newRow);

    // Add event listener to calculate valorFinal when valorOriginal or taxes change
    newRow.addEventListener('input', function(event) {
        if (event.target.classList.contains('valorOriginal') || event.target.classList.contains('taxes')) {
            calculateValorFinal(newRow);
        }
    });
}

function calculateValorFinal(row) {
    var valorOriginalInput = row.querySelector('.valorOriginal');
    var valorFinalInput = row.querySelector('.valorFinal');
    var valorIVAInput = document.getElementById('valorIVA');

    // Calculate valorFinal based on valorOriginal and taxes (valorIVA)
    var valorFinal = parseFloat(valorOriginalInput.value) + parseFloat(valorOriginalInput.value) * parseFloat(valorIVAInput.value)/100;

    // Update the valorFinal input with the calculated value
    valorFinalInput.value = isNaN(valorFinal) ? '' : valorFinal.toFixed(2);
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
            result += firstInput * secondInput;
            sumaPonderacion += secondInput;
        }
    }
    if (sumaPonderacion == 100) {
        output.value = result / 100;
    } else output.value = "La suma de la ponderación no es igual al 100%";

}

function calculateSum() {
    var outputInput = document.getElementById('output');
    var rows = document.querySelectorAll('#inputBoxes tr');

    var sum = 0;
    rows.forEach(function(row) {
        var valorFinalInput = row.querySelector('.valorFinal');
        sum += parseFloat(valorFinalInput.value) || 0;
    });

    // Update the output input with the calculated sum
    outputInput.value = isNaN(sum) ? '' : sum.toFixed(2);
}

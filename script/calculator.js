window.onload = function () {
    addInputBox();
    updateContainerHeight()
}

function addInputBox() {
    var inputBoxes = document.getElementById('inputBoxes');
    var inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.className = 'input';
    inputBoxes.appendChild(inputBox);
    updateContainerHeight();
}

function removeInputBox() {
    var inputBoxes = document.getElementById('inputBoxes');
    if (inputBoxes.childElementCount > 0) {
        inputBoxes.removeChild(inputBoxes.lastChild);
    }
    updateContainerHeight();
}

function updateContainerHeight() {
    var inputBoxes = document.getElementById('inputBoxes');
    var containerHeight = 500 + inputBoxes.clientHeight;
    var loginBox = document.querySelector('.login-box');
    loginBox.style.height = containerHeight + 'px';
  }

function addToDisplay(value) {
    var display = document.getElementById('display');
    display.value = value;
}
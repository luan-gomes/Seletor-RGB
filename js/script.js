window.addEventListener('load', start);

function start() {
  var inputRed = document.querySelector('#inputRed');
  var valueRed = document.querySelector('#valueRed');
  inputRed.value = 0;
  valueRed.value = inputRed.value;

  var inputGreen = document.querySelector('#inputGreen');
  var valueGreen = document.querySelector('#valueGreen');
  inputGreen.value = 0;
  valueGreen.value = inputGreen.value;

  var inputBlack = document.querySelector('#inputBlack');
  var valueBlack = document.querySelector('#valueBlack');
  inputBlack.value = 0;
  valueBlack.value = inputBlack.value;

  inputRed.addEventListener('change', changeValue);
  inputGreen.addEventListener('change', changeValue);
  inputBlack.addEventListener('change', changeValue);
}

function changeValue(event) {
  console.log(event);
  var newColor = event.target.id;
  var newValue = event.target.value;

  switch (newColor) {
    case 'inputRed':
      var valueRed = document.querySelector('#valueRed');
      valueRed.value = newValue;
      break;
    case 'inputGreen':
      var valueGreen = document.querySelector('#valueGreen');
      valueGreen.value = newValue;
      break;
    case 'inputBlack':
      var valueBlack = document.querySelector('#valueBlack');
      valueBlack.value = newValue;
      break;
  }

  changeBackgroundColor();
}

function changeBackgroundColor() {
  var r = document.querySelector('#inputRed').value;
  var g = document.querySelector('#inputGreen').value;
  var b = document.querySelector('#inputBlack').value;

  var square = document.querySelector('#coloredSquare');
  square.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

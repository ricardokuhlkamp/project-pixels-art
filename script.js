// variaveis globais
const btnRandomColor = document.getElementById('button-random-color');
const colors = document.getElementsByClassName('color');
const divPixelBoard = document.getElementById('pixel-board');
const palette = document.getElementById('color-palette');
const btnClear = document.getElementById('clear-board');
const btnGenerateBoard = document.getElementById('generate-board');
const input = document.getElementById('board-size');
const pixels = document.getElementsByClassName('pixel');

function addStorage(key, content) {
  localStorage.setItem(key, JSON.stringify(content));
}
function addStorageWidth(key, contents) {
  localStorage.setItem(key, contents);
}

function initialColor() {
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'red';
  colors[2].style.backgroundColor = 'blue';
  colors[3].style.backgroundColor = 'green';
}

initialColor();


function randomColor() {
  const listColor = [];
  for (let index = 1; index < colors.length; index += 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    colors[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    let color = colors[index].style.backgroundColor;
    listColor.push(color);
  }
  addStorage('colorPalette', listColor);
}

function loadStorageColors(parameter) {
  for (let index = 0; index < (parameter.length); index += 1) {
    colors[index + 1].style.backgroundColor = parameter[index];
  }
}

function pixelByPixel(parameter) {
  console.log('pixelBypixel(parameter): ', parameter)
  for (let index = 0; index < parameter; index += 1) {
    const divPixel = document.createElement('div');
    divPixelBoard.appendChild(divPixel);
    divPixel.setAttribute('class', 'pixel');
    divPixel.style.width = '40px';
    divPixel.style.height = '40px';
    for (let i = 0; i < (parameter - 1); i += 1) {
      const divPixel = document.createElement('div');
      divPixelBoard.appendChild(divPixel);
      divPixel.setAttribute('class', 'pixel');
      divPixel.style.width = '40px';
      divPixel.style.height = '40px';
    }
  }
  addStorageWidth('width', divPixelBoard.style.width);
  let newBoardPicture = document.querySelector('#pixel-board');
  addStorageBoard('pixelBoard', newBoardPicture.innerHTML);
  addStorageBoard('boardSize', 5);
}



function clearBoard() {
  let divPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < divPixel.length; index += 1) {
    divPixel[index].style.backgroundColor = 'white';
  }
  let newBoardPicture = document.querySelector('#pixel-board');
  addStorageBoard('pixelBoard', newBoardPicture.innerHTML);
}

btnClear.addEventListener('click', clearBoard)

function loadStorageBoard(parameter) {
  divPixelBoard.innerHTML = parameter;
}

function loadStorageWidth(parameter) {
  divPixelBoard.style.width = parameter;
}

function executeStorage() {
  if (localStorage.getItem('colorPalette')) {
    let loadColorsList = JSON.parse(localStorage.getItem('colorPalette'));
    loadStorageColors(loadColorsList);
  }
  if (localStorage.getItem('pixelBoard')) {
    let loadBoardColor = localStorage.getItem('pixelBoard');
    loadStorageBoard(loadBoardColor);
  }
  if (localStorage.getItem('width')) {
    let loadWidth = localStorage.getItem('width');
    loadStorageWidth(loadWidth);
  }
}
executeStorage();


function removeOldPixels() {
  for (let i = pixels.length - 1; i > -1; i -= 1) {
    divPixelBoard.removeChild(pixels[i]);
  }
  verifica();
}

function CreateAndRemovePixels() {
  removeOldPixels();
}

btnRandomColor.addEventListener('click', randomColor)
btnGenerateBoard.addEventListener('click', CreateAndRemovePixels);
// marco temporal

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



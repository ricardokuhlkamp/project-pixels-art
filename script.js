window.onload = function () {
  //------------Variáveis Globais.....................
  const getBody = document.body;
  //-----------Funções------------------------
  //2 - Adicione à página uma paleta contendo quatro cores distintas.
  function criaPaletaDeCores() {
    const criaDivPaleta = document.querySelector('#color-palette');
    for (let index = 0; index < 4; index += 1) {
      const divInterna = document.createElement('div');
      criaDivPaleta.appendChild(divInterna);
      divInterna.classList.add('color');
      divInterna.style.border = "solid 1px black";
      divInterna.style.width = '20px';
      divInterna.style.height = '20px';
    };
    criaDivPaleta.style.display = 'flex';
  };
  //3 - Adicione a cor preta como a primeira cor da paleta de cores.
  //8 - Defina a cor preta como cor inicial da paleta de cores
  function criaClasseParaCadaPaleta() {
    let getDivsInternas = document.querySelector('.color');
    getDivsInternas.classList.add('selected');
  }
  //2.1 - Adicione à página uma paleta contendo quatro cores distintas.
  function criaCoresNaPaleta() {
    let listaCoresPaleta = document.querySelectorAll(".color");
    listaCoresPaleta[0].style.backgroundColor = 'black';
    listaCoresPaleta[1].style.backgroundColor = 'red';
    listaCoresPaleta[2].style.backgroundColor = 'green';
    listaCoresPaleta[3].style.backgroundColor = 'blue';
  };
  //4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.
  function geraCoresAleatorias() {
    const divBtnCoresleatorias = document.createElement('div');
    getBody.appendChild(divBtnCoresleatorias);
    const btnCoresAleatorias = document.createElement('button');
    divBtnCoresleatorias.appendChild(btnCoresAleatorias);
    btnCoresAleatorias.innerText = 'Cores aleatórias';
    btnCoresAleatorias.setAttribute('id', 'button-random-color');
    btnCoresAleatorias.addEventListener('click', function () {
      let listaCoresPaleta = document.querySelectorAll(".color");
      for (let index = 1; index < listaCoresPaleta.length; index += 1) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        listaCoresPaleta[index].style.backgroundColor = `rgb(${r},${g},${b})`;
      };
      let armazenaCor = document.querySelector('#color-palette');
      localStorage.setItem('colorPalette', armazenaCor.innerHTML);
    });
  };



  //6 - Adicione à página um quadro contendo 25 pixels.
  //7 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.
  function criaGrid() {
    // let number = recebeInput();
    // console.log(number)
    //let getContainerQuadrados = document.getElementById('pixel-board');
    const divContainerQuadrados = document.createElement('div');
    getBody.appendChild(divContainerQuadrados);
    divContainerQuadrados.style.width = '210px';
    divContainerQuadrados.setAttribute('id', 'pixel-board');
    for (let index = 0; index < 5; index += 1) {
      const divPixel = document.createElement('div');
      divContainerQuadrados.appendChild(divPixel);
      divPixel.style.width = '40px';
      divPixel.style.height = '40px';
      divPixel.style.border = '1px solid black';
      divPixel.style.display = 'inline-block';
      divPixel.setAttribute('class', 'pixel');
      divPixel.style.backgroundColor = "white";
      for (let index2 = 0; index2 < 4; index2 += 1) {
        const divPixel = document.createElement('div');
        divPixel.style.width = '40px';
        divPixel.style.border = '1px solid black';
        divContainerQuadrados.appendChild(divPixel);
        divPixel.style.display = 'inline-block';
        divPixel.style.height = '40px';
        divPixel.setAttribute('class', 'pixel');
        divPixel.style.backgroundColor = "white";
      };
    };

    const getBtnVqV = document.querySelector('#generate-board')
    getBtnVqV.addEventListener('click', function () {
      let divContainerQuadrados = document.getElementById('pixel-board');
      let getAll = document.querySelectorAll('.pixel');

      let getInput = parseInt(document.getElementById('board-size').value);
      
      if (getInput > 5 && getInput <= 50) {
        for (const item of getAll) {
          item.remove();
        };
  
        divContainerQuadrados.remove();
        let numero = getInput;
        
        let larguraDivPai = numero * (210 / 5)
        console.log(larguraDivPai)
        console.log(getInput);
        const divQuadrados = document.createElement('div');
        getBody.appendChild(divQuadrados);
        divQuadrados.style.width = `${larguraDivPai}px`;
        divQuadrados.setAttribute('id', 'pixel-board');

        for (let index = 0; index < numero; index += 1) {
          const divPixel = document.createElement('div');
          divQuadrados.appendChild(divPixel);
          divPixel.style.width = '40px';
          divPixel.style.height = '40px';
          divPixel.style.border = '1px solid black';
          divPixel.style.display = 'inline-block';
          divPixel.setAttribute('class', 'pixel');
          divPixel.style.backgroundColor = "white";
          for (let index2 = 0; index2 < (numero - 1); index2 += 1) {
            const divPixel = document.createElement('div');
            divPixel.style.width = '40px';
            divPixel.style.border = '1px solid black';
            divQuadrados.appendChild(divPixel);
            divPixel.style.display = 'inline-block';
            divPixel.style.height = '40px';
            divPixel.setAttribute('class', 'pixel');
            divPixel.style.backgroundColor = "white";
          };
        };
      } else if (getInput > 50){
        for (const item of getAll) {
          item.remove();
        };
  
        divContainerQuadrados.remove();
               
        let larguraDivPai = 50 * (210 / 5)
        
        const divQuadrados = document.createElement('div');
        getBody.appendChild(divQuadrados);
        divQuadrados.style.width = `${larguraDivPai}px`;
        divQuadrados.setAttribute('id', 'pixel-board');

        for (let index = 0; index < 50; index += 1) {
          const divPixel = document.createElement('div');
          divQuadrados.appendChild(divPixel);
          divPixel.style.width = '40px';
          divPixel.style.height = '40px';
          divPixel.style.border = '1px solid black';
          divPixel.style.display = 'inline-block';
          divPixel.setAttribute('class', 'pixel');
          divPixel.style.backgroundColor = "white";
          for (let index2 = 0; index2 < (50 - 1); index2 += 1) {
            const divPixel = document.createElement('div');
            divPixel.style.width = '40px';
            divPixel.style.border = '1px solid black';
            divQuadrados.appendChild(divPixel);
            divPixel.style.display = 'inline-block';
            divPixel.style.height = '40px';
            divPixel.setAttribute('class', 'pixel');
            divPixel.style.backgroundColor = "white";
          };
        };
      } else {
        alert('Board inválido!');
      };
    });
  };

  // function quadrados() {


  //   criaGrid();
  // };

  // function recebeInput() {
  //   const getBtnVqV = document.getElementById('generate-board')
  //   getBtnVqV.addEventListener('click', function() {
  //     let getInput = parseInt(document.getElementById('board-size').value);
  //     let numero = getInput;
  //     // console.log(getInput);


  //   })

  // }



  //9 - Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro.
  function selecionarCorDaPaletta() {
    let divPixel = document.getElementById('color-palette');
    let listaCoresPaleta = document.querySelectorAll(".color");
    divPixel.addEventListener('click', function (event) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  };
  //10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.
  function pintar() {
    let getDivBoard = document.querySelector('#pixel-board');
    console.log(getDivBoard)
    getDivBoard.addEventListener('click', function (event) {
      let selecionado = document.querySelector('.selected');
      console.log(selecionado)
      if (event.target.className === 'pixel') {
        let bkgColor = selecionado.style.backgroundColor;
        event.target.style.backgroundColor = bkgColor;
        //5. LocalSTORAGE manda os dados para o local storage
        console.log(event.target.style.backgroundColor);
      };
      let getPixelBoard = document.querySelector('#pixel-board');//<<<<<<<<<<<<<<<<<<<<<<<<<<
      localStorage.setItem('pixelBoard', getPixelBoard.innerHTML);
      console.log('getClassPixel: ', getPixelBoard.innerHTML);
    });
  };

  //11 - Crie um botão que retorne a cor do quadro para a cor inicial.

  function criaButtonClearBoard() {

    const divClearBoard = document.createElement('div');
    divClearBoard.setAttribute('id', 'div-clear-board');//<<--TEXTO NOVO.....para requisito bonus 11.   
    getBody.appendChild(divClearBoard);
    const btnClearBoard = document.createElement('button');
    divClearBoard.appendChild(btnClearBoard);
    btnClearBoard.innerText = 'Limpar';
    btnClearBoard.setAttribute('id', 'clear-board');
    //return btnClearBoard;
  };

  function clearBoard() {
    let button = document.querySelector('#clear-board');
    button.addEventListener('click', function () {
      let getBoard = document.querySelectorAll('.pixel');
      for (let index = 0; index < getBoard.length; index += 1) {
        getBoard[index].style.backgroundColor = 'white';
      };
      let getPixelBoard = document.querySelector('#pixel-board');
      localStorage.setItem('pixelBoard', getPixelBoard.innerHTML);
      console.log('getClassPixel: ', getPixelBoard.innerHTML);
    });
  };
  //TEXTO NOVO------------para requisito bonus 11

  function criaInput() {
    let getDivClearBoard = document.getElementById('div-clear-board');
    const inputDimensao = document.createElement('input');
    inputDimensao.setAttribute('id', 'board-size');
    getDivClearBoard.appendChild(inputDimensao);
    getDivClearBoard.appendChild(inputDimensao);
    inputDimensao.style.width = '48px';
    inputDimensao.setAttribute('type', 'number');
    inputDimensao.setAttribute('min', '1');
    inputDimensao.setAttribute('max', '50');
  };

  function criaButtonSize() {
    let getDivClearBoard = document.getElementById('div-clear-board');
    const buttonSize = document.createElement('button');
    buttonSize.setAttribute('id', 'generate-board');
    getDivClearBoard.appendChild(buttonSize);
    buttonSize.innerText = 'VQV';
  };

  //------------Chamando as Funções-------------------

  criaPaletaDeCores();
  criaClasseParaCadaPaleta();
  criaCoresNaPaleta();
  geraCoresAleatorias();
  criaButtonClearBoard();
  criaInput();//TEXTO NOVO.....para requisito bonus 11.
  criaButtonSize();//TEXTO NOVO.....para requisito bonus 11.
  // recebeInput();
  //quadrados();
  criaGrid();

  clearBoard();
  selecionarCorDaPaletta();
  pintar();
  checaResgataLocalStorage();
  checaCorBoarderLocalStorage();

}; // window.onLoad termina aqui

//--------Resgatando do LocalStorage---------------
//5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.

function checaResgataLocalStorage() {
  if (localStorage.getItem('colorPalette')) {
    let armazenaCor = document.querySelector('#color-palette');
    let coresPaleta = localStorage.getItem('colorPalette');
    armazenaCor.innerHTML = coresPaleta;
    //console.log(coresPaleta);
    //selecionarCorDaPaletta()
  };

};
function checaCorBoarderLocalStorage() {
  if (localStorage.getItem('pixelBoard')) {
    let getPixelBoard = document.querySelector('#pixel-board');
    let coresBorder = localStorage.getItem('pixelBoard');
    getPixelBoard.innerHTML = coresBorder;
  };
};
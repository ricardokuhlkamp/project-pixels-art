window.onload = function () {
  //-----------------Variáveis Globais.....................
  const getBody = document.body;
  //------------------------Funções------------------------

  //1 - Adicione à página o título "Paleta de Cores".
  //function criaH1Title() {
    //const criaH1 = document.createElement('h1');
    //criaH1.setAttribute('id', 'title');
    //getBody.appendChild(criaH1);
    //criaH1.innerText = 'Paleta de Cores';
    //let armazenaH1 = document.querySelector('#title').innerHTML;
    //localStorage.setItem('keyH1', armazenaH1);
  //};
  //2 - Adicione à página uma paleta contendo quatro cores distintas.
  function criaPaletaDeCores() {
    const criaDivPaleta = document.querySelector('#color-palette');
    //const criaDivPaleta = document.createElement('div');
    //getBody.appendChild(criaDivPaleta);
    //criaDivPaleta.setAttribute('id', 'color-palette');
    //criaDivPaleta.style.width = '100px';
    //criaDivPaleta.style.height = '25px';
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

  function webStorage() {
    //5 armazenar todos os elementos no local storage
    let armazenaCor = JSON.stringify(document.querySelector('#color-palette'));    
    localStorage.setItem('colorPalette', armazenaCor);
    console.log('webstorage: ', armazenaCor)
  }

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
        let cor = listaCoresPaleta[index].style.backgroundColor;
        //console.log(cor);
      };
      //5. LocalSTORAGE
      let armazenaCor = document.querySelector('#color-palette');
      localStorage.setItem('colorPalette', armazenaCor.innerHTML);
    });
  };

  //6 - Adicione à página um quadro contendo 25 pixels.
  //7 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

  function quadrados() {
    const divContainerQuadrados = document.createElement('div');
    getBody.appendChild(divContainerQuadrados);
    divContainerQuadrados.style.width = '240px';
    //divContainerQuadrados.style.height = '200px';
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
  };
  //9 - Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro.
  function selecionarCorDaPaletta() {
    let divPixel = document.getElementById('color-palette');
    let listaCoresPaleta = document.querySelectorAll(".color");
    divPixel.addEventListener('click', function (event) {
      for (let index = 0; index < listaCoresPaleta.length; index += 1) {
        listaCoresPaleta[index].setAttribute('class', 'color');
        //console.log(listaCoresPaleta[index]);
      }
      event.target.classList.add('selected');
      console.log('cor event.target: ',event.target.style.backgroundColor);
      console.log('função selecionar(): ', event.target.className);
      let corSelecionada = event.target.style.backgroundColor;

      //console.log('função sele(): ',event.target.style.backgroundColor);
      console.log('return: ', corSelecionada)
      return corSelecionada;
    });    
  };
  //let corEscolhida = corSelecionada;

  //10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.
  function pintar() {  
    
    let getDivBoard = document.querySelector('#pixel-board');
    getDivBoard.addEventListener('click', function (event) {
      let selecionado = document.querySelector('.selected');      
      let bkgColor = selecionado.style.backgroundColor;        
        if (event.target.className === 'pixel') {
          event.target.style.backgroundColor = bkgColor;
        }
      console.log(event.target.className === 'pixel');
    });
  };




  //--------------Resgatando do LocalStorage---------------
  //5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.
  function resgataLocalStorage() {
    //let armazenaH1 = document.querySelector('#title');
    //console.log(armazenaH1)
    //let tituloDoH1 = JSON.parse(localStorage.getItem('#title'));
    //armazenaH1,innerHTML =tituloDoH1;

    if (localStorage.length !== 0) {
    let armazenaCor = document.querySelector('#color-palette');
    let coresPaleta = JSON.parse(localStorage.getItem('colorPalette'));
    armazenaCor.innerHTML = coresPaleta;
    }

    //console.log('coresPaleta: ',coresPaleta);    
  };
  //-----------------Chamando as Funções-------------------
  //criaH1Title();
  webStorage();
  resgataLocalStorage();
  criaPaletaDeCores();
  criaClasseParaCadaPaleta()
  criaCoresNaPaleta();
  geraCoresAleatorias();
  quadrados();
  selecionarCorDaPaletta();
  pintar();
  
  


}


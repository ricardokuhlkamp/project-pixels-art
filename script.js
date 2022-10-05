window.onload = function(){
  //-----------------Variáveis Globais.....................
  const getBody = document.body;
  //------------------------Funções------------------------
  function criaH1Title(){    
    const criaH1 = document.createElement('h1');
    criaH1.setAttribute('id', 'title');
    getBody.appendChild(criaH1);
    criaH1.innerText = 'Paleta de Cores';
  };

  function criaPaletaDeCores(){
    const criaDivPaleta = document.createElement('div');
    getBody.appendChild(criaDivPaleta);
    criaDivPaleta.setAttribute('id', 'color-palette');
    criaDivPaleta.style.width = '100px';
    criaDivPaleta.style.height = '25px';
    for (let index = 0; index < 4; index += 1) {
      const divInterna = document.createElement('div');
      criaDivPaleta.appendChild(divInterna);
      divInterna.classList.add('color');
      divInterna.style.border = "solid 1px black";
      divInterna.style.width = '20px';
      divInterna.style.height = '20px';
    }
    criaDivPaleta.style.display = 'flex';    
  };

  function criaClasseParaCadaPaleta(){
    let getDivsInternas = document.querySelector('.color');
    getDivsInternas.classList.add('selected');
  }

  function criaCoresNaPaleta(){
    let listaCoresPaleta = document.querySelectorAll(".color");
    listaCoresPaleta[0].style.backgroundColor = 'black';
    listaCoresPaleta[1].style.backgroundColor = 'red';
    listaCoresPaleta[2].style.backgroundColor = 'green';
    listaCoresPaleta[3].style.backgroundColor = 'blue';    
  };

  function geraCoresAleatorias(){
    const divBtnCoresleatorias = document.createElement('div');
    getBody.appendChild(divBtnCoresleatorias);
    const btnCoresAleatorias = document.createElement('button');
    divBtnCoresleatorias.appendChild(btnCoresAleatorias);
    btnCoresAleatorias.innerText = 'Cores aleatórias';
    btnCoresAleatorias.setAttribute('id', 'button-random-color');

    btnCoresAleatorias.addEventListener('click', function(){
      let listaCoresPaleta = document.querySelectorAll(".color");
      for (let index = 1; index < listaCoresPaleta.length; index += 1) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        listaCoresPaleta[index].style.backgroundColor = `rgb(${r},${g},${b})`;
        let cor = listaCoresPaleta[index].style.backgroundColor;
        //console.log(cor);
      };
      let armazenaCor = document.querySelector('#color-palette');
      localStorage.setItem('colorPalette', armazenaCor.innerHTML);
    })
  }

  function quadrados(){
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


  //--------------Resgatando do LocalStorage---------------
  function resgataLocalStorage(){
    let armazenaCor = document.querySelector('#color-palette');
    let coresPaleta = localStorage.getItem('colorPalette');
    //armazenaCor.innerHTML = coresPaleta;
    console.log(armazenaCor.innerHTML);    
  };
  //-----------------Chamando as Funções-------------------
  criaH1Title();
  criaPaletaDeCores();
  criaClasseParaCadaPaleta()
  criaCoresNaPaleta();
  geraCoresAleatorias();
  quadrados();
  resgataLocalStorage();

}
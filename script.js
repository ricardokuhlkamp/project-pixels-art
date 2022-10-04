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
    for (let index = 0; index < 4; index += 1) {
      const divInterna = document.createElement('div');
      criaDivPaleta.appendChild(divInterna);
      divInterna.classList.add('color');
      divInterna.style.border = "solid 1px black";
      divInterna.style.width = '20px';
      divInterna.style.height = '20px'
    }
    criaDivPaleta.style.display = 'flex';
    
  };

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
        console.log(listaCoresPaleta[index].style.backgroundColor);
      };
    })
  }
  //-----------------Chamando as Funções-------------------
  criaH1Title();
  criaPaletaDeCores();
  criaCoresNaPaleta();
  geraCoresAleatorias();
  //--------------Resgatando do LocalStorage---------------
}
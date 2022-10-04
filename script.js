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
  }
  //-----------------Chamando as Funções-------------------
  criaH1Title();
  criaPaletaDeCores();
  criaCoresNaPaleta();
  //--------------Resgatando do LocalStorage---------------
}
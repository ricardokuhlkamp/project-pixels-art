window.onload = function() {
  //-----------------Variáveis Globais.....................
  //------------------------Funções------------------------
  function criaH1Title() {
    let getBody = document.body;
    let criaH1 = document.createElement('h1');
    criaH1.setAttribute('id', 'title');
    getBody.appendChild(criaH1);
    criaH1.innerText = "Paleta de Cores";
  }
  //-----------------Chamando as Funções-------------------
  criaH1Title();
  //--------------Resgatando do LocalStorage---------------
}
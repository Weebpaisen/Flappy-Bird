let boardWidth = 360;
let boardHeight = 640;
var bg = new Image(); //Cria uma imagem nova
bg.src = "Imagens/bg.png"; //Define a imagem de fundo, src é para source
let inputlocked = false; //Variável para bloquear comandos do usuário após certas condições

document.addEventListener("keydown", tecladown); //Adiciona um listener e funcion para quando a tecla é pressionada

let estado_jogo = {
    MENU: "menu",
    JOGANDO: "jogando",
    GAMEOVER: "gameover"   
};
let estadoatual = estado_jogo.MENU; //Define o estado do jogo após inicializar como menu

let botao
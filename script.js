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

let botaojogo = {
    x: boardWidth / 2 - 115.5 /2,
    y: boardHeight / 2 - 64 / 2,
    width: 115,
    height: 64,
};

let logo = {
    x: boardWidth / 2 - 300 / 2,
    y: boardHeight / 4,
    width: 300,
    height: 100,
}

let imagemtitulo = new Image();
imagemtitulo.src = "Imagens/logo.png"; 

let gameover = new Image();
gameover.src = "Imagens/gameover.png";

let passaro = {
    x: 50,
    y: boardHeight / 2,
    width: 40,
    height: 30,

}

let velocidadeY = 0; 
let velocidadeX = -2; //Velocidade do cenário, o valor negativo é para que ele se mova para a esquerda
let gravidade = 0.5;
let passaroY = boardHeight / 2; //Posição inicial do pássaro 
let canoWidth = 50;
let canoEspaço = 200;
let canoarray = []; //Array para armazenar os canos e guardar pra possíveis colisões
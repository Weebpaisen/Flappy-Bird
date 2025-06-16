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
let canoGap = 200;
let canoarray = []; //Array para armazenar os canos e guardar pra possíveis colisões

function colocarcano() //Função para posicionar os canos
{
    criarcano();
}

function criarcano(){
   let alturaCanoMax  = boardHeight - canoGap - 50; //Altura máxima do cano
   let alturaCanoSuperior = Math.floor(Math.random() * alturaCanoMax); // Math.floor arredonda o número para baixo, Math.random gera um número aleatório entre 0 e 1, que é multiplicado pela altura máxima do cano
   let alturaCanoInferior = boardHeight - alturaCanoSuperior - canoGap; //Altura do cano inferior, subtração da altura do cano superior e o espaço entre os canos

   let canoSuperior = {
       x: boardWidth,
       y: 0,
       width: canoWidth,
       height: alturaCanoSuperior,
       passou: false //Variável para verificar se o pássaro já passou pelo cano
       }
   let canoInferior = {
       x: boardWidth,
       y: alturaCanoSuperior + canoGap,
       width: canoWidth,
       height: alturaCanoInferior,
       passou: false
       };
    canoarray.push(canoSuperior, canoInferior); //Adiciona os canos ao array, o comando push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array

    window.onload = function() {
        board = document.getElementById("jogo"); 
        board.height = boardHeight; 
        board.width = boardWidth;
        context: board.getContext("2d"); //Define o contexto do canvas, que é onde os elementos serão desenhados
        passaroimagem = new image(); 
        passaroimagem.src = "Imagens/passaro.png"; 
        canosuperiorimagem = new Image();
        canosuperiorimagem.src = "Imagens/canosuperior.png";
        canoinferiorimagem = new Image();
        canoinferiorimagem.src = "Imagens/canoinferior.png";
        botaoplay = new Image();
        botaoplay.src = "Imagens/play.png"; 
        }
} 
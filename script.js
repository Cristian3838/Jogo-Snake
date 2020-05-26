let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // O Context ele desenha o que vai acontecer dentro do canvas
let box = 32; //32 pixels cada quadradinho
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box

}

function criarBG() {
    context.fillStyle = "Lightred"; //fillstyle ele trabalha com o estilo do canvas
    context.fillRect(0, 0, 16 * box, 16 * box); //Desenha o retangulo onde ira aconctecer o jogo
}

function criarCobrinha() {
    for (i = 0; i < snake.lenght; i++) {
        context.fillStyle = "green";
        context.fillrect(snake[1].x, snake[i], snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();



//Canvas vai ter a altura de 16 quadradinhos com o tamanho de 32 pixels
//Defer faz o java script ser carregado
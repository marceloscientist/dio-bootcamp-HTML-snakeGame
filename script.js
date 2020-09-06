let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 2 * box,
    y: 2 * box
};
let direction = "right";

function createBG() {
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function createSnake() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "red"
        context.fillRect(snake[i].x * 2, snake[i].y, box, box / 2)
    }
}

function startGame() {
    createBG();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction=="right") snakeX += box;
    if(direction=="left") snakeX -= box;
    if(direction=="up") snakeY += box;
    if(direction=="down") snakeY -= box;
    snake.pop();

    let newHead = {
        x: sneakX,
        y: sneakY
    }

    snake.unshift(newHead)
}

let jogo = setInterval(startGame, 100);



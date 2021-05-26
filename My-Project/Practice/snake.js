var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);
var posY = 0;
var posX = 0;
var vy = 0;
var vx = 0;
var snakes = [];
var appleX = 10;
var appleY = 10;
var score = 4;
//knopka ucun 
document.addEventListener('keydown', key);

function key(key) {
    if (key.keyCode === 87 && vy != 1) {
        vx = 0;
        vy = -1;
    }
    if (key.keyCode === 83 && vy != -1) {
        vx = 0;
        vy = 1;
    }
    if (key.keyCode === 68 && vx != -1) {
        vx = 1;
        vy = 0;
    }
    if (key.keyCode === 65 && vx != 1) {
        vx = -1;
        vy = 0;
    }
}
//1 ml san 15 defe dondurmek ucun
setInterval(loop, 1000 / 15);

function loop() {
    draw();
    update();
}
//sekiller ucun
function draw() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 400, 400);
    context.fillStyle = 'red';
    context.fillRect(appleX * 20, appleY * 20, 20, 20);
    context.fillStyle = 'green';
    snakes.forEach(t => {
        context.fillRect(t.posX * 20, t.posY * 20, 20, 20);
    })
    context.fillStyle = 'white';
    context.font = '30px Arial';
    context.fillText(score - 4, 20, 40);

}
//tekrarlanacaq kodlar ucun
function update() {
    posX += vx;
    posY += vy;
    snakes.push({
        posX: this.posX,
        posY: this.posY
    });
    snakes.forEach(t => {
        if (snakes.length > score) {
            snakes.shift();
        }
    });
    if (posX === appleX && posY === appleY) {
        score++;
        appleX = Math.floor(Math.random() * 20);
        appleY = Math.floor(Math.random() * 20);
    }
}
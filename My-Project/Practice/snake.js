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
    context.fillStyle = 'green';
    context.fillRect(appleX * 20,appleY * 20,20,20);
}
//tekrarlanacaq kodlar ucun
function update() {

}
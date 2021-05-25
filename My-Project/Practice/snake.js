var c = document.getElementById('canvas');
var snake = c.getContext('2d');
var food = c.getContext("2d");

snake.moveTo(30,10);
snake.lineTo(60,10);
snake.stroke();
snake.direction(left,right);

food.moveTo(0,0);
food.lineTo(200,100);
food.stroke();



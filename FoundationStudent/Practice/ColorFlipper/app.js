let colorContainer = document.querySelector('.color-container');
let colorContent = document.querySelector('.color-content');
let btn = document.querySelector('.btn');



console.log(btn);



function changeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let counter = 1;

  colorContainer.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  counter++;
}



btn.addEventListener('click', function () {
  changeColor();
})
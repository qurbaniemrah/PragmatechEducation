let colorContainer = document.querySelector('.color-container');
let colorContent = document.querySelector('.color-content');
let btn = document.querySelector('.btn');
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let startValue = 0;



function changeColor() {
  colorContainer.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

changeColor();

btn.addEventListener('click', () => {
  changeColor();
})
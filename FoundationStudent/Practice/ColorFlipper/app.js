let colorContainer = document.querySelector('.color-container');
let colorContent = document.querySelector('.color-content');
let btn = document.querySelector('.btn');

console.log(colorContainer);

btn.addEventListener('click', function () {
  colorContainer.style.backgroundColor = 'red';
})
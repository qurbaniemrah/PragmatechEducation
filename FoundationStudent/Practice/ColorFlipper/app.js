let colorContainer = document.querySelector('.color-container');
let colorContent = document.querySelector('.color-content');
let cahngeContent = document.querySelector('#empty');
let btn = document.querySelector('.btn');






console.log(cahngeContent);



function changeColor() {
 
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let counter = 1;
   
 
  colorContainer.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  
}



btn.addEventListener('click', function () {
  changeColor();
})
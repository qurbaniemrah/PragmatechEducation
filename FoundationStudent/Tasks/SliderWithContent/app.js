let slider = document.getElementsByClassName('slider');
let sliderWidth = slider[0].clientWidth;
let images = document.querySelectorAll('img');
let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');

let left = 0;

for (i=0; i<images.length; i++) {
   
}


leftBtn.addEventListener('click', ()=> {
    console.log('left clicked');
});

rightBtn.addEventListener('click', ()=> {
  left += images;
});

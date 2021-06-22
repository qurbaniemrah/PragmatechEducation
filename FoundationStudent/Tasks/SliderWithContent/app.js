let slider = document.getElementsByClassName('slider');
let sliderWidth = slider[0].clientWidth;
let images = document.querySelectorAll('img');
let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');

let zero = 0;

for (i=0; i<images.length;i++) {
    console.log(images[i]);
}



leftBtn.addEventListener('click', ()=> {
    console.log('left clicked');
});

rightBtn.addEventListener('click', ()=> {
    console.log('right clicked');
});

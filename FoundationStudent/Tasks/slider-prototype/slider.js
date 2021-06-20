let img = document.querySelector('.slider-frame img');
let imgSrc = [
    'img/slider1.jpg',
    'img/slider2.jpg',
    'img/slider3.jpg'
]
let leftBtn = document.getElementsByClassName('left');
let rightBtn = document.getElementsByClassName('right');
let count =0;



leftBtn[0].addEventListener('click', function () {
  if (count <1) {
    img.setAttribute('src', imgSrc[2]);
    count =2;
  }else {
    img.setAttribute('src', imgSrc[count]);
    count --
  }
  console.log('countun deyeri ' + count);
})

rightBtn[0].addEventListener('click', function () {
   if (count>2) {
    img.setAttribute('src', imgSrc[0]);
    count = 0;
   }else {
    img.setAttribute('src', imgSrc[count]);
    count ++
   }
   console.log('countun deyeri ' + count);
})




































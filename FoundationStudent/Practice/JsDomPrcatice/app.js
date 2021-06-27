  
images=[
    'images/01.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'
]

let slideImg=document.querySelector('.sliderItem img')

a=0;
let interval=setInterval(function(){
   if(a==3){
       a=0
   }else{
    slideImg.setAttribute('src',images[a])
    a++
   }
},1000)
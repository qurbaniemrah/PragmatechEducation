// top menu section start
let containerHeader = document.getElementById('container-header');
let miniNavBar = document.getElementById('mini-nav-bar');
let logo = document.getElementsByClassName('logo');
let socialConnect = document.getElementsByClassName('social-connect');
let navBar = document.getElementsByClassName('nav-bar');
let containerHeaderImages = document.querySelectorAll('#container-header img');


window.onscroll = function () {
    if (window.pageYOffset > 120) {
        containerHeader.style.display = 'none';
        miniNavBar.style.display = 'block';
        miniNavBar.style.position = 'fixed';
        miniNavBar.style.display = 'absolute';
        miniNavBar.style.top = 0;
        miniNavBar.style.backgroundColor = '#FFFFFF';
        miniNavBar.style.display = 'flex';
        miniNavBar.style.width = '100%';
        miniNavBar.style.margin = '0px';
        

    } else if (window.pageYOffset < 120) {
        containerHeader.style.display = 'block';
        miniNavBar.style.display = 'none';
        containerHeader.style.display = 'relative';
        containerHeader.style.top = 0;
        containerHeader.style.backgroundColor = '#FFFFFF';
        containerHeader.style.display = 'flex';
        containerHeader.style.width = '100%';
        containerHeader.style.margin = '0px';
       
    }
}

// top menu section end


// dropdown menu section start
let dropdownMenu = document.querySelector('.dropdown-menu');
let dropdownContent = document.querySelector('.dropdown-content');
let test = true;

dropdownMenu.addEventListener('click',function () {
    if(test == true) {
        dropdownContent.style.display = 'block';
        test = false
        
    }else {
        dropdownContent.style.display = 'none';
        test = true;
        
    }
    
})







// dropdown menu section end

// slider section start
let imagesWidth = document.querySelector('.slider-images').clientWidth;
let images = document.querySelectorAll('.slider-images ');
let firstImage = images[0];
let secondImage = images[1];
let leftButton = document.querySelector('.left');
let rightButton = document.querySelector('.right');
let leftValue = 0
let rightValue = 0




//buttons
rightButton.onclick = () => {
    leftValue += imagesWidth
    if (leftValue > (images.length - 1) * imagesWidth) {
        leftValue = 0;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.left = -leftValue + 'px';
    }


}

leftButton.onclick = () => {
    leftValue -= imagesWidth
    if (leftValue < 0) {
        leftValue = 0;
        leftValue = (images.length - 1) * imagesWidth
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.left = -leftValue + 'px';
    }


}

//slider section end


//preloader section start


















// slider section end
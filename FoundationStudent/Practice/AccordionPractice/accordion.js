let header = document.querySelector('.accordion-header');
let content = document.querySelector('.accordion-content');

header.addEventListener('click', function () {
  

    content.style.display = 'none';
    header.style.display = 'block';


});
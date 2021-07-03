let body = document.body;
let elem = document.createElement('div');
let btn = document.createElement('button');
btn.innerHTML = 'click';
btn.style.marginTop = '20px';

btn.addEventListener('click', function () {
 elem.style.position = 'relative';
 elem.style.left = '30%';
 elem.style.top = '200px';
 
})




elem.style.width = '200px';
elem.style.height = '200px';
elem.style.backgroundColor = 'red';
document.body.appendChild(elem);
document.body.appendChild(btn);
console.log(btn);




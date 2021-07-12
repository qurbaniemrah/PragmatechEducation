let todoContainer = document.querySelector('.todo-container');
let inputField = document.querySelector('.input-field');
let btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value = '';
    paragraph.addEventListener('click',()=> {
    document.body.removeChild(paragraph);
    });
});




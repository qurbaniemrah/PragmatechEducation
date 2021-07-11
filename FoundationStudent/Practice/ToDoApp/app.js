let todoContainer = document.querySelector('.todo-container');
let inputField = document.querySelector('.input-field');
let btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    document.appendChild(paragraph);
});
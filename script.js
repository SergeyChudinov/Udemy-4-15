'use strict';
// localStorage.setItem('number', 7);
// localStorage.removeItem('number');
// localStorage.clear();
// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const chenge = document.querySelector('#color');
if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}
checkbox.addEventListener('change', () => {
    if (localStorage.getItem('isChecked')) {
        localStorage.removeItem('isChecked');
        checkbox.checked = false;
    } else {
        localStorage.setItem('isChecked', true);
    }
    
});
if (localStorage.getItem('bg')) {
    form.style.backgroundColor = 'red';
}
chenge.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'chenged') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'chenged');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};
const serializedPerone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPerone);
console.log(JSON.parse(localStorage.getItem('alex')));

localStorage.setItem('alex2', persone);
console.log((localStorage.getItem('alex2')));
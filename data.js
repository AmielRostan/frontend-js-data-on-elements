// Your code here
window.addEventListener('DOMContentLoaded', () => {
    const add = document.getElementById('add');

    const ul = document.getElementById('shopping-list');
    add.addEventListener('click', (event) => {
        event.preventDefault();

        const product = document.getElementById('name');
        const type = document.getElementById('type');

        const element = document.createElement('li');
        element.innerText = product.value + ' - ' + type.value;
        element.setAttribute("data-type", type.value);

        ul.appendChild(element);
    });
});

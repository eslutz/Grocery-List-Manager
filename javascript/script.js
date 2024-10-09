const addItem = (item) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = formatItem(item);
    span.classList.add('item-text');
    const button = document.createElement('button');
    button.textContent = '\u{2715}';
    button.type = 'button';
    button.ariaLabel = 'remove item';
    button.classList.add('delete');

    button.addEventListener(
        'click',
        function () {
            li.remove();
            toggleListVisibility();
        },
        { once: true }
    );

    li.appendChild(span);
    li.appendChild(button);

    grocery_list.appendChild(li);
};

const clearItems = () => {
    const grocery_list = document.getElementById('grocery-list');
    grocery_list.replaceChildren();
    toggleListVisibility();
};

const formatItem = (item) => {
    item = item.trim();
    return item.charAt(0).toUpperCase() + item.slice(1);
};

const submitItem = (event) => {
    event.preventDefault();
    const itemForm = event.target;
    const item = form['item'];
    if (item.value) {
        addItem(item.value);
        toggleListVisibility();
        itemForm.reset();
    } else {
        alert('item required');
    }
};

const toggleListVisibility = () => {
    if (grocery_list.querySelectorAll('li').length === 0) {
        grocery_list_section.classList.add('hide');
        emptyList.classList.remove('hide');
    } else {
        grocery_list_section.classList.remove('hide');
        emptyList.classList.add('hide');
    }
};

const grocery_list_section = document.getElementById('grocery-list-section');
const grocery_list = document.getElementById('grocery-list');
const emptyList = document.getElementById('empty-list');
const clearList = document.getElementById('clear');
const itemForm = document.getElementById('item-form');

clearList.addEventListener('click', clearItems);
itemForm.addEventListener('submit', submitItem);

toggleListVisibility();

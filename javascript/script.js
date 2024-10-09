const addItem = (item) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = item;
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
            setGroceryListVisibility();
        },
        { once: true }
    );

    li.appendChild(span);
    li.appendChild(button);

    grocery_list.appendChild(li);
};

const deleteAllItems = () => {
    const grocery_list = document.getElementById('grocery-list');
    grocery_list.replaceChildren();
    setGroceryListVisibility();
};

const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const item = form['item'];
    if (item.value) {
        addItem(item.value);
        setGroceryListVisibility();
        form.reset();
    } else {
        alert('item required');
    }
};

const setGroceryListVisibility = () => {
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
const deleteAll = document.getElementById('delete-all');
const addItemForm = document.getElementById('add-item-form');

deleteAll.addEventListener('click', deleteAllItems);
addItemForm.addEventListener('submit', submitForm);

setGroceryListVisibility();

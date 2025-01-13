const GroceryListItem = ({ item, deleteItem }) => {
    return (
        <li>
            <span className='item-text'>{item}</span>
            <button
                className='delete'
                aria-label='remove item'
                onClick={deleteItem}>
                &#x1f5d1;
            </button>
        </li>
    );
};

export default GroceryListItem;

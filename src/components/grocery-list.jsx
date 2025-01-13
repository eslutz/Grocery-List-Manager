import GroceryListItem from './grocery-list-item';

const GroceryList = ({ groceryList, deleteItem, clearList }) => {
    return (
        <main>
            <section
                id='grocery-list-section'
                className='grocery-section'>
                <h2>Grocery List</h2>
                <ol
                    id='grocery-list'
                    className='grocery-list'>
                    {groceryList.map((item, index) => (
                        <GroceryListItem
                            key={index}
                            item={item}
                            deleteItem={() => deleteItem(index)}
                        />
                    ))}
                </ol>
                <button
                    id='clear'
                    className='clear'
                    type='button'
                    aria-label='remove all items'
                    onClick={clearList}>
                    Clear All Items
                </button>
            </section>
        </main>
    );
};

export default GroceryList;

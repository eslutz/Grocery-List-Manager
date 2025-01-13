import { useState } from 'react';

const AddItem = ({ onAddItem }) => {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.trim()) {
            onAddItem(item);
            setItem('');
        }
    };

    return (
        <section className='add-item-section'>
            <h2>Add New Item</h2>
            <form
                id='item-form'
                onSubmit={handleSubmit}>
                <div className='row'>
                    <input
                        type='text'
                        name='item'
                        placeholder='Item&hellip;'
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        required
                    />
                    <input
                        type='submit'
                        aria-label='add item'
                        value='Add'
                    />
                </div>
            </form>
        </section>
    );
};

export default AddItem;

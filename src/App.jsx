import { useState, useEffect } from 'react';
import Header from './components/header';
import EmptyList from './components/empty-list';
import GroceryList from './components/grocery-list';
import AddItem from './components/add-item';
import Footer from './components/footer';

function App() {
    const [groceryList, setGroceryList] = useState([]);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'system';
    });

    useEffect(() => {
        const applyTheme = (theme) => {
            if (theme === 'system') {
                const systemTheme = window.matchMedia(
                    '(prefers-color-scheme: dark)'
                ).matches
                    ? 'dark'
                    : 'light';
                document.documentElement.setAttribute(
                    'data-theme',
                    systemTheme
                );
            } else {
                document.documentElement.setAttribute('data-theme', theme);
            }
        };

        applyTheme(theme);
        localStorage.setItem('theme', theme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (localStorage.getItem('theme') === 'system') {
                applyTheme('system');
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    const addItem = (item) => {
        const formattedItem = item
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setGroceryList([...groceryList, formattedItem]);
    };

    const clearList = () => {
        setGroceryList([]);
    };

    const deleteItem = (index) => {
        setGroceryList(groceryList.filter((_, i) => i !== index));
    };

    return (
        <>
            <Header
                setTheme={setTheme}
                currentTheme={theme}
            />
            <main>
                {groceryList.length === 0 ? (
                    <EmptyList />
                ) : (
                    <GroceryList
                        groceryList={groceryList}
                        deleteItem={deleteItem}
                        clearList={clearList}
                    />
                )}
                <AddItem onAddItem={addItem} />
            </main>
            <Footer />
        </>
    );
}

export default App;

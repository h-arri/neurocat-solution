import React, { useState } from 'react';
import './App.css';
import Filter from "./components/filter/Filter";
import List from "./components/list/List";

const App = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSearch = (inputText) => {
        setSearchText(inputText);
        if (inputText !== '') {
            setFilteredItems([...items?.filter(item => item.includes(inputText))]);
        } else {
            setFilteredItems(items);
        }
    };

    const handleAdd = () => {
        const newItem = Math.random().toString(36).substring(7);
        setItems([...items, newItem]);

        if (searchText !== '') {
            // check if the new item contains search text then update the filtered items
            if (newItem.includes(searchText)) {
                setFilteredItems([...filteredItems, newItem]);
            }
        } else {
            setFilteredItems([...filteredItems, newItem]);
        }
    };

    return (
        <div className="app">
            <header className='app-header'>
                <Filter data-testid="filter" handleClick={handleAdd} handleSearch={handleSearch} searchText={searchText}/>
            </header>
            <article className='content'>
                <List data-testid="list" items={filteredItems}/>
            </article>
        </div>
    );
}

export default App;

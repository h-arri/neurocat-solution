import React from 'react';
import './Filter.css';

const Filter = (props) => {
    const { searchText, handleSearch, handleClick } = props;

    const handleChange = (e) => {
        handleSearch(e.target.value.trim().toLowerCase());
    };

    return (<>
            <input className='search-input' placeholder='Search' value={searchText?.toUpperCase()}
                   onChange={handleChange}/>
            <hr width="1" size="60" className='divider' />
            <button className='add' onClick={handleClick}>+</button>
        </>
    )
};

export default Filter;

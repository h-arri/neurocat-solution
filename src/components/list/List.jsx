import React from 'react';
import './List.css';

const List = (props) => {
    const { items } = props;
    let classes = items.length === 0 ? 'list no-data' : 'list';

    return (<ul className={classes}>
        {items.length > 0 ?
            items.map((item, index) => {
                classes = index < items.length - 1 ? 'list-item' : 'list-item hide-divider';

                return <li key={item} className={classes}>{item.toUpperCase()}</li>;
            })
            : <li className='list-item hide-divider'>No data!</li>}
    </ul>);
};

export default List;

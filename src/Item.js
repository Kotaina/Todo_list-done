import React from 'React';


class Item extends React.Component {

const { list } = this.props;

return (
    <li key={list.itemID} >
        <h3>{list.title}</h3>
        <input
            className='todo__item'
            type='checkbox'
            onChange={() => onCheck(itemID)}
        />
    </li>
)
}

export default Item;

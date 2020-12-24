// import { render } from '@testing-library/react';
import React from 'React';


class Item extends React.Component {

    render() {
        const { list } = this.props;
        return (
            <li key={list.itemID} >
                <h3>{list.title}</h3>
                <input
                    className='todo__item'
                    type='checkbox'
                    onChange={() => this.props.onCheck(list.itemID)}
                />
            </li>
        )
    }
};

export default Item;

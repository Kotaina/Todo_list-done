import './App.css';

import React from 'react';
import Item from './Item';

const list = [
  {
    title: 'Взять ручку',
    isChecked: false,
    itemID: 0
  },
  {
    title: 'Купить гель',
    isChecked: false,
    itemID: 1
  },
  {
    title: 'Взять кружку',
    isChecked: true,
    itemID: 2
  },
  {
    title: 'Посмотретб расписание',
    isChecked: true,
    itemID: 3
  }
];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list
    }

    this.onCheck = this.onCheck.bind(this);
  }

  onCheck = item => {
    console.log(item);
  }

  render() {
    return (
      <div className='app'>
        <ul className='app__main-list'>
          <Item
            list={list}
            onCheck={this.onCheck}
          />
        </ul>
      </div>
    )
  }

}

export default App;

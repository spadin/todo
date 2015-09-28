import React from 'react';
import AddItem from './add_item';
import Items from './items';

class App extends React.Component {
  render() {
    return (
      <div>
        <AddItem />
        <Items src="/api/todo_items.json" />
      </div>
    );
  }
}

export default App;

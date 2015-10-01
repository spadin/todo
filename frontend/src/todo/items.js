import _ from 'lodash';
import React from 'react';
import Item from './item';

class Items extends React.Component {
  state = {
    items: []
  }

  componentWillMount() {
    this.props.store.findAll().then((data) => {
      this.setState({items: data.todo_items});
    });
  }

  getItems() {
    return _.map(this.state.items, (item) => {
      return (
        <Item key={item.id} content={item.content} />
      );
    });
  }

  render() {
    return (
      <ul>
        {this.getItems()}
      </ul>
    );
  }
}

export default Items;

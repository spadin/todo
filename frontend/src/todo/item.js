import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.content}</li>
    );
  }
}

export default Item;

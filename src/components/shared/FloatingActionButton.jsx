import React, { Component } from 'react';

class FloatingActionButton extends Component {

  render() {
    const { addItem, deleteItem } = this.props;

    return (
      <div class="fixed-action-btn">
        <a onClick={addItem} class="btn-floating btn-large blue">
          <i class="large material-icons">add</i>
        </a>
      </div>
    );
  }

}

export default FloatingActionButton;

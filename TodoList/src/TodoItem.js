import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    // 这种写法可以节省性能
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { item } = this.props;
    return (
      <li>
        <span>{item}</span>
        <span className="icon-close" onClick={this.handleClick}>X</span>
      </li>
    )
  }

  handleClick() {
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index);
  }

}

export default TodoItem;
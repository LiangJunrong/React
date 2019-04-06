import React, { Component } from 'react';
import './index.css';
import 'antd/dist/antd.css';
import store from './store';
// 1. 删除 initListAction 以及下面的 axios，并引入 actionCreators.js 中的 getInitList
import { getChangeInputValue, getAddTodoItem, getDeleteTodoItem, getInitList } from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);

    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        todoList={this.state.todoList}
        handleInputChange={this.handleInputChange}
        handleInputKeyUp={this.handleInputKeyUp}
        handleAddItem={this.handleAddItem}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

  componentDidMount() {
    // 5. 调用 getInitList，并使用 dispatch 将 action 派发出去。这时候不仅 reducer.js 可以接收到这个 action，我们的 sagas.js 也可以接收到这个 action。
    const action = getInitList();
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = getChangeInputValue(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleAddItem() {
    const action = getAddTodoItem();
    store.dispatch(action);
  }

  handleInputKeyUp(e) {
    if(e.keyCode === 13) {
      this.handleAddItem();
    }
  }

  handleDeleteItem(index) {
    const action = getDeleteTodoItem(index);
    store.dispatch(action);
  }

}

export default TodoList;
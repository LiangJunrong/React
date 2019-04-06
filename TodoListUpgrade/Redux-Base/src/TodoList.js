import React, { Component } from 'react';
import './index.css';
import 'antd/dist/antd.css';
import store from './store';
import { getChangeInputValue, getAddTodoItem, getDeleteTodoItem, initListAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';

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
    axios.get('https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist').then( (res) => {
      const action = initListAction(res.data.todolist);
      store.dispatch(action);
    })
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
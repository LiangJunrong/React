import React, { Component } from 'react';
import './index.css';
import 'antd/dist/antd.css';
import store from './store';
// 4. 在 TodoList.js 中引用 actionCreators.js 中的 getTodoList，并去除没再引用的 initListAction
import { getChangeInputValue, getAddTodoItem, getDeleteTodoItem, getTodoList } from './store/actionCreators';
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
    // 5. 在 componentDidMount 中调用 getTodoList。如果我们没使用 redux-thunk，我们只能使用对象，但是现在我们可以使用函数了。
    const action = getTodoList();
    // 6. 当我们 dispatch 了 action 的时候，我们就调用了步骤 1 的 getTodoList()，从而获取了数据
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
import React, { Component } from 'react'; // 引用 React 及其组件
import 'antd/dist/antd.css'; // 引用 Antd
import './index.css'; // 引用主 CSS 文件
import store from './store'; // 引入 Redux（如果不写目录下的文件，默认引用 index.js）
import { getInputChangeAction, getAddItemAction, getItemDeleteAction } from './store/actionCreators' // 引入 actionCreators.js
// 1. 引入 TodoListUI
import TodoListUI from './TodoListUI';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState(); // 获取 store 数据
    this.handleInputChange = this.handleInputChange.bind(this); // 输入内容改变
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this); // 回车添加项
    this.handleAddItem = this.handleAddItem.bind(this); // 按钮添加项
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this); // store 数据改变
    store.subscribe(this.handleStoreChange); // 监听 store 改变，改变就执行 handleStoreChange 方法
  }

  render() {
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleInputKeyUp = {this.handleInputKeyUp}
        handleAddItem = {this.handleAddItem}
        handleItemDelete = {this.handleItemDelete}
      />
    );
  }

  handleInputChange(e) { // input 输入数据
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() { // 监听 store 数据改变
    this.setState(store.getState());
  }

  handleAddItem() { // 添加数据
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleInputKeyUp(e) { // 回车添加数据
    if(e.keyCode === 13) {
      this.handleAddItem();
    }
  }

  handleItemDelete(index) { // 删除数据
    const action = getItemDeleteAction(index);
    store.dispatch(action);
  }

}

export default TodoList;
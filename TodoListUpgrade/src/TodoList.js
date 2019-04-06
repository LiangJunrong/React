import React, { Component } from 'react'; // 引用 React 及其组件
import 'antd/dist/antd.css'; // 引用 Antd
import './index.css'; // 引用主 CSS 文件
import store from './store'; // 引入 Redux（如果不写目录下的文件，默认引用 index.js）

// 7. 引入 initListAction
import { getInputChangeAction, getAddItemAction, getItemDeleteAction, initListAction } from './store/actionCreators' // 引入 actionCreators.js
import TodoListUI from './TodoListUI'; // 引入 TodoListUI
// 1. 引入 axios
import axios from 'axios'

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

  componentDidMount() {
    // 2. 调用接口
    axios.get('https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist').then( (res) => {
      console.log(res.data.todolist);
      // 3. 将接口数据 dispatch 到 action 中，所以需要先前往 actionCreators.js 中创建 action
      // 7. 创建 action 并 dispatch 到 reducer.js 中
      const action = initListAction(res.data.todolist);
      store.dispatch(action);
    })
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
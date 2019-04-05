// 引用 React 及其组件
import React, { Component } from 'react';
// 引用 Antd
import 'antd/dist/antd.css';
// 引用主 CSS 文件
import './index.css';
// 引入 输入框、按钮、列表、头像
import { Input, Button, List, Avatar } from 'antd';
// 引入 Redux（如果不写目录下的文件，默认引用 index.js）
import store from './store';
// 引入 actionTypes
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);

    // 3. 绑定处理 redux 返回回来的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input 
            placeholder='todo info' 
            className="todo-input" 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
          />
          <Button 
            type="primary" 
            className="todo-submit"
            onClick={this.handleButtonClick}
          >
            提交
          </Button>
        </div>
        <div className="todo-list">
          <List
            itemLayout="horizontal"
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="http://jsliang.top">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }

  handleInputChange(e) {
    // 1. 通过 Action，将数据传给 Store
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action);
  }

  // 4. 绑定的方法
  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick(e) {
    // 5. 执行 Button 点击的流程
    const action = {
      type: ADD_TODO_ITEM
    };
    store.dispatch(action);
  }

  handleInputKeyUp(e) {
    if(e.keyCode === 13) {
      this.handleButtonClick();
    }
  }

  handleItemDelete(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action);
  }

}

export default TodoList;
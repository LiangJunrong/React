// Fragment 是一种占位符形式，类似于 Vue 的 Template
import React, { Component, Fragment } from 'react';

// 引入组件
import TodoItem from './TodoItem';

// 引用样式
import './style.css';

class TodoList extends Component {

  // 构造函数
  constructor(props) {
    super(props);
    // 定义数据
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // 渲染页面
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容：</label>
          {/* 单项数据绑定 */}
          {/* 在 React 中，绑定时间的，一般为半驼峰形式 */}
          <input 
            id="insertArea"
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {/* 精简 JSX，将部分抽取出来 */}
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  // 获取单独项
  getTodoItem() {
    return this.state.list.map( (item, index) => {
      return (
        <TodoItem 
          key={index}
          item={item} 
          index={index}
          handleItemDelete={this.handleItemDelete}
        />
      )
    })
  }

  // 方法体 - 输入内容
  handleInputChange(e) {
    const value = e.target.value;
    this.setState( () => ({
      inputValue: value
    }))
  }

  // 方法体 - 点击提交
  handleBtnClick() {
    const list = this.state.list,
          inputValue = this.state.inputValue;
    this.setState( () => ({
      list: [...list, inputValue],
      inputValue: ''
    }))

    // 或者可以这样写：
    // this.setState( (prevState) => ({
    //   list: [...prevState.list, prevState.inputValue],
    //   inputValue: ''
    // }))

  }

  // 方法体 - 删除项目
  handleItemDelete(index) {
    // immutable - state 不允许做任何改变
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState( () => ({
      list: list
    }))
  }

}

export default TodoList;
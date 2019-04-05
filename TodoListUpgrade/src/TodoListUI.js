import React, { Component } from 'react'; // 引用 React 及其组件
import { Input, Button, List, Avatar } from 'antd'; // 引入 输入框、按钮、列表、头像

class TodoListUI extends Component {
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
            value={this.props.inputValue} 
            onChange={this.props.handleInputChange}
            onKeyUp={this.props.handleInputKeyUp}
          />
          <Button 
            type="primary" 
            className="todo-submit"
            onClick={this.props.handleAddItem}
          >
            提交
          </Button>
        </div>
        <div className="todo-list">
          <List
            itemLayout="horizontal"
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
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
}

export default TodoListUI;
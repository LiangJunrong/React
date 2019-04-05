import React from 'react'; // 引用 React 及其组件
import { Input, Button, List, Avatar } from 'antd'; // 引入 输入框、按钮、列表、头像

const TodoListUI = (props) => {
  return (
    <div className="todo">
      <div className="todo-title">
        <h1>TodoList</h1>
      </div>
      <div className="todo-action">
        <Input 
          placeholder='todo info' 
          className="todo-input" 
          value={props.inputValue} 
          onChange={props.handleInputChange}
          onKeyUp={props.handleInputKeyUp}
        />
        <Button 
          type="primary" 
          className="todo-submit"
          onClick={props.handleAddItem}
        >
          提交
        </Button>
      </div>
      <div className="todo-list">
        <List
          itemLayout="horizontal"
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => {props.handleItemDelete(index)}}>
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
  )
}

export default TodoListUI;
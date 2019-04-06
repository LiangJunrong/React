import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div className="todo">
      <div className="todo-title">
        <h1>TodoList</h1>
      </div>
      <div className="todo-action">
        <Input 
          placeholder='todo' 
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
          size="large"
          bordered
          dataSource={props.todoList}
          renderItem={(item, index) => (
            <List.Item onClick={(item) => {props.handleDeleteItem(index)}}>
              {index + 1} - {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default TodoListUI;
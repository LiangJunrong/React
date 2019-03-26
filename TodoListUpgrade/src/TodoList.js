import React, { Component } from 'react';

import 'antd/dist/antd.css';

import './index.css';

import { Input, Button } from 'antd';

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <Input placeholder='todo info' className="todo-list-input" />
        <Button type="primary" className="todo-list-button">提交</Button>
      </div>
    );
  }
}

export default TodoList;

import React, { Component } from 'react';

import 'antd/dist/antd.css';

import './index.css';

import { Input, Button, List, Avatar } from 'antd';

const data = [
  { title: '第一条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条描述', },
  { title: '第二条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条描述', },
  { title: '第三条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条描述', },
  { title: '第四条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条描述', },
];
class TodoList extends Component {
  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input placeholder='todo info' className="todo-input" />
          <Button type="primary" className="todo-submit">提交</Button>
        </div>
        <div className="todo-list">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="http://jsliang.top">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />,
        </div>
      </div>
    );
  }
}

export default TodoList;

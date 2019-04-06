import React, { Component } from 'react';
import './index.css';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

class TodoList extends Component {
  
  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input 
            placeholder='todo' 
            className="todo-input" 
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
            onKeyUp={this.handleInputEnter.bind(this)}
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
            size="large"
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item onClick={() => {this.props.handleDeleteItem(index)}}>
                {index + 1} - {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }

  handleInputEnter(e){
    if(e.keyCode === 13) {
      this.props.handleAddItem();
    }
  }

}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },
    handleAddItem() {
      const action = {
        type: 'add_list_item'
      }
      dispatch(action);
    },
    handleDeleteItem(index) {
      console.log(index);
      const action = {
        type: 'delete_list_item',
        index
      }
      dispatch(action);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
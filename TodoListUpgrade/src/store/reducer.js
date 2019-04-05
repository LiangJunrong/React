// 引入 actionTypes
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: [
    // { title: '第一条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条描述', },
  ]
}

// reducer 可以接收 state，但是绝不能修改 state
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {
  // 2. 在 reducer.js 中获取数据，并 return 返回回去
  if(action.type === CHANGE_INPUT_VALUE) {
    // JSON.parse(JSON.stringify(state)) 是一种深拷贝，但是这种深拷贝对一些类型无效，详情可看： 
    // https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/PersonalExperience/2019-InterviewPreparation.md#chapter-five-five
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  // 6. 接收 TodoList 传递过来的数据，并进行处理与返回
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    let newList = {
      title: newState.inputValue,
      description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第 n 条描述'
    };
    newState.list.push(newList);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}
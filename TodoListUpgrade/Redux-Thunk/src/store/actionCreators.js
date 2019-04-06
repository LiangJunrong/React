import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
// 1. 把 axios 从 TodoList.js 中剪切到 actionCreators.js 中
import axios from 'axios';

export const getChangeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddTodoItem = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteTodoItem = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

// 2. 把 TodoList 文件中 componentDidMount() 的 axios.get() 挪到 actionCreators.js 中
// 3. 在没使用 redux-thunk 之前，我们仅可以在 actionCreators.js 中使用对象，现在我们也可以使用函数了。
export const getTodoList = () => {
  // 7. 当我们使用 getTodoList 的时候，我们也能传递 store 的 dispatch，从而在下面代码中使用
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist').then( (res) => {
      // 8. 直接使用 actionCreators.js 中的 initListAction 方法，并 dispatch 该 action
      const action = initListAction(res.data.todolist);
      dispatch(action);
    })
  }
}
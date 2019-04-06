// 6. 引用 redux-saga/effets 中的 takeEvery
// 13. 由于我们在 sagas.js 中没有引用到 store，所以不能使用 store.dispatch()，但是 redux-saga 给我们提供了 put 方法来代替 store.dispatch() 方法
import { takeEvery, put } from 'redux-saga/effects';
// 7. 引入 GET_INIT_LIST 类型
import { GET_INIT_LIST } from './actionTypes';
// 11. 将 TodoList.js 的 axios 引入迁移到 sagas.js 中
import axios from 'axios';
// 12. 引入 actionCreator.js 中的 initListAction
import { initListAction } from './actionCreators'

// 8. 使用 generator 函数
function* todoSaga() {
  // 9. 这行代码表示，只要我们接收到 GET_INIT_LIST 的类型，我们就执行 getInitList 方法
  yield takeEvery(GET_INIT_LIST, getInitList);
}

// 10. 定义 getInitList 方法
function* getInitList() {
  try {
    // 14. 在 sagas.js 中处理异步函数
    const res = yield axios.get('https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolis');
    const action = initListAction(res.data.todolist);
    // 15. 等 action 处理完之后，在执行 put 方法
    yield put(action);
  } catch (error) {
    console.log("接口请求失败，请检查 todolist 接口。");
  }
  
}

export default todoSaga;
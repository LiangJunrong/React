import { createStore } from 'redux';
import reducer from './reducer';

// 如果安装了 Redux 工具，则使用该工具
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
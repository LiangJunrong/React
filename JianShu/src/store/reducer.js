// 2. 通过 combineReducers 整合多个 reducer.js 文件
import { combineReducers } from 'redux';
import headerReducer from '../common/header/store/reducer';

const reducer =  combineReducers({
  header: headerReducer
})

export default reducer;
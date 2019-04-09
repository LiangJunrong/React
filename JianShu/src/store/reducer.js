// import { combineReducers } from 'redux';
// 1. 通过 redux-immutable 引入 combineReducers 而非原先的 redux
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';

const reducer =  combineReducers({
  header: headerReducer
})

export default reducer;
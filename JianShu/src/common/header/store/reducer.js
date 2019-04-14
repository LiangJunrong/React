import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputFocus: false,
  mouseInHot: false,
  list: [],
  // 1. 在 reducer.js 中设置页数和总页数
  page: 1,
  totalPage: 1,
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('inputFocus', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('inputFocus', false);
    case actionTypes.GET_LIST:
      // 4. 我们通过 merge 方法同时设置多个 state 值
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case actionTypes.ON_MOUSE_ENTER_HOT:
      return state.set('mouseInHot', true);
    case actionTypes.ON_MOUSE_LEAVE_HOT:
      return state.set('mouseInHot', false);
    // 11. 判断 action 类型，并进行设置
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page + 1);
    default:
      return state;
  }
}
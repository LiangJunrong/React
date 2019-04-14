import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputFocus: false,
  // 1. 设置鼠标移动到热门模块为 false
  mouseInHot: false,
  list: [],
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('inputFocus', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('inputFocus', false);
    case actionTypes.GET_LIST:
      return state.set('list', action.data);
    // 6. 在 reducer.js 中判断这两个 action 执行设置 mouseInHot
    case actionTypes.ON_MOUSE_ENTER_HOT:
      return state.set('mouseInHot', true);
    case actionTypes.ON_MOUSE_LEAVE_HOT:
      return state.set('mouseInHot', false);
    default:
      return state;
  }
}
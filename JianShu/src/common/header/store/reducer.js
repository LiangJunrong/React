import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputBlur: true,
  // 2. 给 header 下的 reducer.js 提供存储数据的地方
  list: []
});

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS_OR_BLUR) {
    return state.set('inputBlur', !state.get('inputBlur'));
  }
  return state;
}
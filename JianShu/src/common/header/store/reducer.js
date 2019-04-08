// 6. 引入常量
import * as actionTypes from './actionTypes'

const defaultState = {
  inputBlur: true
};

export default (state = defaultState, action) => {
  // 7. 使用常量
  if(action.type === actionTypes.SEARCH_FOCUS_OR_BLUR) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputBlur = !newState.inputBlur
    return newState;
  }
  return state;
}
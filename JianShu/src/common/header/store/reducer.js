// 1. 将 reducer.js 转移到 header/store/reducer.js 中
const defaultState = {
  inputBlur: true
};

export default (state = defaultState, action) => {
  if(action.type === 'search_focus') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputBlur = !newState.inputBlur
    return newState;
  }
  return state;
}
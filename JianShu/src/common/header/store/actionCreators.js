// 4. 引入常量
import * as actionTypes from './actionTypes'

// 1. 定义 actionCreators
// 5. 将 action 中的字符串修改为常量
export const searchFocusOrBlur = () => ({
  type: actionTypes.SEARCH_FOCUS_OR_BLUR
})
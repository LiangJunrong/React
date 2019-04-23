import * as actionTypes from './actionTypes'
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

// 4. 在 actionCreators.js 中定义这两个方法：onMouseEnterHot 和 onMouseLeaveHot
export const onMouseEnterHot = () => ({
  type: actionTypes.ON_MOUSE_ENTER_HOT,
})

export const onMouseLeaveHot = () => ({
  type: actionTypes.ON_MOUSE_LEAVE_HOT,
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then( (res) => {
      if(res.data.code === 0) {
        const data = res.data.list;
        // 由于数据太多，我们限制数据量为 15 先
        data.length = 15;
        dispatch(changeList(data));
      }
    }).catch( (error) => {
      console.log(error);
    });
  }
}

const changeList = (data) => ({
  type: actionTypes.GET_LIST,
  data: fromJS(data)
})
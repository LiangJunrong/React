import * as actionTypes from './actionTypes'
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

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
        // 2. 由于数据太多，我们之前限制数据量为 15，这里我们去掉该行代码
        // data.length = 15;
        dispatch(changeList(data));
      }
    }).catch( (error) => {
      console.log(error);
    });
  }
}

const changeList = (data) => ({
  type: actionTypes.GET_LIST,
  data: fromJS(data),
  // 3. 我们在这里计算总页数
  totalPage: Math.ceil(data.length / 10)
})

// 9. 定义 changePage 方法
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page: page,
})

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
  totalPage: Math.ceil(data.length / 10)
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page: page,
})

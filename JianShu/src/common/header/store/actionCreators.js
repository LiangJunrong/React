import * as actionTypes from './actionTypes'
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocusOrBlur = () => ({
  type: actionTypes.SEARCH_FOCUS_OR_BLUR
})

const changeList = (data) => ({
  type: actionTypes.GET_LIST,
  data: fromJS(data)
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
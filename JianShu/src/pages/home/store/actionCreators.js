import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

export const getLeftList = () => {
  return (dispatch) => {
    axios.get('/api/leftList.json').then((res) => {
      if(res.data.code === 0) {
        const data = res.data.data.articleFeed;
        dispatch(setLeftList(data));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const setLeftList = (data) => ({
  type: actionTypes.GET_LEFT_LIST,
  data: fromJS(data),
})

export const getRightRecommendAuthor = () => {
  return (dispatch) => {
    axios.get('/api/rightRecommendAuthor.json').then((res) => {
      if(res.data.code === 0) {
        const data = res.data.data.recommendationCard;
        dispatch(setRightRecommendAuthor(data))
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const setRightRecommendAuthor = (data) => ({
  type: actionTypes.GET_RIGHT_RECOMMEND_AUTHOR,
  data: fromJS(data),
})
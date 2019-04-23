import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  leftNav: [],
  rightRecommend: [],
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_LEFT_LIST:
      return state.set('leftNav', action.data);
    case actionTypes.GET_RIGHT_RECOMMEND_AUTHOR:
      return state.set('rightRecommend', action.data);
    default:
      return state;
  }
}
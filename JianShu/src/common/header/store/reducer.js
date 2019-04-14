import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputFocus: false,
  mouseInHot: false,
  list: [],
  page: 1,
  totalPage: 1,
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('inputFocus', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('inputFocus', false);
    case actionTypes.GET_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case actionTypes.ON_MOUSE_ENTER_HOT:
      return state.set('mouseInHot', true);
    case actionTypes.ON_MOUSE_LEAVE_HOT:
      return state.set('mouseInHot', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page + 1);
    default:
      return state;
  }
}

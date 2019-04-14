import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputBlur: true,
  list: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS_OR_BLUR:
      return state.set('inputBlur', !state.get('inputBlur'));
    case actionTypes.GET_LIST:
      return state.set('list', action.data);
    default:
      return state;
  }
}
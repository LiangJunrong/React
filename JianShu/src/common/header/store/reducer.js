import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputBlur: true,
  list: []
});

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS_OR_BLUR) {
    return state.set('inputBlur', !state.get('inputBlur'));
  }
  if(action.type === actionTypes.GET_LIST) {
    return state.set('list', action.data);
  }
  return state;
}
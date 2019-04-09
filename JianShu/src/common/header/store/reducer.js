import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputBlur: true
});

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS_OR_BLUR) {
    return state.set('inputBlur', !state.get('inputBlur'));
  }
  return state;
}
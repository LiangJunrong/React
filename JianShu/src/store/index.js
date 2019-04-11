// 2. 引入 applyMiddleware
import { createStore, compose, applyMiddleware } from 'redux';
// 1. 引入 redux-thunk
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 3. 通过 applyMiddleware 同时使用 redux-thunk 和 redux-dev-tools
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
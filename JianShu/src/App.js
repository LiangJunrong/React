import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';
// 1. 引入 React 路由的 BrowserRouter 和 Route
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Header />
        {/* 2. 在页面中使用 React 路由 */}
        <BrowserRouter>
          <Route path="/" exact render={() => <div>HOME</div>}></Route>
          <Route path="/detail" exact render={() => <div>DETAIL</div>}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
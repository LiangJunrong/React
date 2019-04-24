import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// 如果你希望应用程序能脱机工作并加载更快，
// 那么可以将下面的 unregister() 改为 register()。 请注意，这带来了一些陷阱。
// 了解有关 service workers 的更多信息：http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

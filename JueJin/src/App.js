import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import TimeLine from './pages/TimeLine';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={TimeLine}></Route>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
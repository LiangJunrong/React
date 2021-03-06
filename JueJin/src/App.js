import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import TimeLine from './pages/TimeLine';
import NotFound from './pages/404';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect from="/" to="/timeline/recommend" exact />
          <Route path="/timeline/recommend" component={TimeLine}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
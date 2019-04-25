import React, { Component } from "react";
import './index.css';
import Nav from './components/Nav';
import LeftList from './components/leftList';
import RightRecommend from './components/RightRecommend';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Nav />
        <div className="home-container">
          <LeftList />
          <RightRecommend />
        </div>
      </div>
    )
  }
}

export default Home;
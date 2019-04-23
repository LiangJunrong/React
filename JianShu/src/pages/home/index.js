import React, { Component } from 'react';
import LeftList from './components/LeftList';
import RightRecommend from './components/RightRecommend';
import TopNav from './components/TopNav';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <TopNav />
        <div className="main-container">
          <LeftList />
          <RightRecommend />
        </div>
      </div>
    )
  }
}

export default Home;
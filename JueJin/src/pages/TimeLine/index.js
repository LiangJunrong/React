import React, { Component } from "react";
import './index.css';
import Nav from './components/Nav';
import LeftList from './components/LeftList';
import RightRecommend from './components/RightRecommend';

class TimeLine extends Component {
  render() {
    return (
      <div className="timeline">
        <Nav />
        <div className="timeline-container">
          <LeftList />
          <RightRecommend />
        </div>
      </div>
    )
  }
}

export default TimeLine;
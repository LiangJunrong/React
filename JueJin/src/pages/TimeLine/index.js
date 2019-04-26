import React, { Component } from "react";
import './index.css';
import Loadable from 'react-loadable';
// import Nav from './components/Nav';
// import LeftList from './components/LeftList';
// import RightRecommend from './components/RightRecommend';

const Loading = () => <div>Loading...</div>;

const Nav = Loadable({
  loader: () => import('./components/Nav'),
  loading: Loading,
});

const LeftList = Loadable({
  loader: () => import('./components/LeftList'),
  loading: Loading,
});

const RightRecommend = Loadable({
  loader: () => import('./components/RightRecommend'),
  loading: Loading,
})

class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.backTop = this.backTop.bind(this);
  }

  render() {
    return (
      <div className="timeline">
        <Nav />
        <div className="timeline-container" >
          <LeftList />
          <RightRecommend />
        </div>
        <button className="scroll-to-top" onClick={this.backTop}>置顶</button>
      </div>
    )
  }

  backTop() {
    console.log(document)
    // window.body.scrollTop = 0;
  }

}

export default TimeLine;
import React, { Component } from 'react'
import List from './components/List';
import Recommend from './components/Recommend';

class Home extends Component {
  render() {
    return (
      <div>
        <List/>
        <Recommend/>
      </div>
    )
  }
}

export default Home;
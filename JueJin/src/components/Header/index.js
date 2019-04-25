import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <Link to="home">首页</Link>
        </div>
      </header>
    )
  }
}

export default Header;
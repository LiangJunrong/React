import React, { Component } from 'react';
import './index.css';

import homeImage from '../../resources/img/header-home.png';
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputFocus: true
    }
    this.searchFocusOrBlur = this.searchFocusOrBlur.bind(this);
  }

  render() {
    return (
      <header>
        <div className="header_left">
          <a href="/">
            <img alt="首页" src={homeImage} className="headef_left-img" />
          </a>
        </div>
        <div className="header_center">
          <div className="header_center-left">
            <div className="nav-item header_center-left-home">
              <i className="icon icon-home"></i>
              <span>首页</span>
            </div>
            <div className="nav-item header_center-left-download">
              <i className="icon icon-download"></i>
              <span>下载App</span>
            </div>
            <div className="nav-item header_center-left-search">
              <input 
                className={this.state.inputFocus ? 'input-nor-active' : 'input-active'}
                placeholder="搜索"
                onFocus={this.searchFocusOrBlur}
                onBlur={this.searchFocusOrBlur}
              />
              <i className="icon icon-search"></i>
            </div>
          </div>
          <div className="header_center-right">
            <div className="nav-item header_right-center-setting">
              <span>Aa</span>
            </div>
            <div className="nav-item header_right-center-login">
              <span>登录</span>
            </div>
          </div>
        </div>
        <div className="header_right nav-item">
          <span className="header_right-register">注册</span>
          <span className="header_right-write nav-item">
            <i className="icon icon-write"></i>
            <span>写文章</span>
          </span>
        </div>
      </header>
    )
  }

  searchFocusOrBlur(e) {
    const inputFocus = this.state.inputFocus;
    this.setState( () => ({
      inputFocus: !inputFocus
    }))
  }

}

export default Header;
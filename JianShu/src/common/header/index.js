import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

import homeImage from '../../resources/img/header-home.png';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputBlur: true
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
              <CSSTransition
                in={this.state.inputBlur}
                timeout={200}
                classNames="slide"
              >
                <input 
                  className={this.state.inputBlur ? 'input-nor-active' : 'input-active'}
                  placeholder="搜索"
                  onFocus={this.searchFocusOrBlur}
                  onBlur={this.searchFocusOrBlur}
                />
              </CSSTransition>
              <i className={this.state.inputBlur ? 'icon icon-search' : 'icon icon-search icon-active'}></i>
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
    const inputBlur = this.state.inputBlur;
    this.setState( () => ({
      inputBlur: !inputBlur
    }))
  }

}

export default Header;
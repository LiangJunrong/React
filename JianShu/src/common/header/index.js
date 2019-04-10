import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './index.css';
import { actionCreators } from './store';

import homeImage from '../../resources/img/header-home.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header_left">
          <a href="/">
            <img alt="首页" src={homeImage} className="header_left-img" />
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
                in={this.props.inputBlur}
                timeout={200}
                classNames="slide"
              >
                <input 
                  className={this.props.inputBlur ? 'input-nor-active' : 'input-active'}
                  placeholder="搜索"
                  onFocus={this.props.searchFocusOrBlur}
                  onBlur={this.props.searchFocusOrBlur}
                />
              </CSSTransition>
              <i className={this.props.inputBlur ? 'icon icon-search' : 'icon icon-search icon-active'}></i>
              <div className={this.props.inputBlur ? 'display-hide header_center-left-hot-search' : 'display-show header_center-left-hot-search'}>
                <div className="header_center-left-hot-search-title">
                  <span>热门搜索</span>
                  <span>
                    <i className="icon-change"></i>
                    <span>换一批</span>
                  </span>
                </div>
                <div className="header_center-left-hot-search-content">
                  <span>考研</span>
                  <span>慢死人</span>
                  <span>悦心</span>
                  <span>一致</span>
                  <span>是的</span>
                  <span>jsliang</span>
                </div>
              </div>
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
}

const mapStateToProps = (state) => {
  return {
    inputBlur: state.get('header').get('inputBlur')
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    searchFocusOrBlur() {
      dispatch(actionCreators.searchFocusOrBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
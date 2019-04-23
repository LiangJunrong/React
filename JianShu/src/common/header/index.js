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
                in={this.props.inputFocus}
                timeout={200}
                classNames="slide"
              >
                <input 
                  className={this.props.inputFocus ? 'input-active' : 'input-nor-active'}
                  placeholder="搜索"
                  onFocus={this.props.searchFocus}
                  onBlur={this.props.searchBlur}
                />
              </CSSTransition>
              <i className={this.props.inputFocus ? 'icon icon-search icon-active' : 'icon icon-search'}></i>
              {/* 8. 在判断中加多一个 this.props.mouseInHot，这样只要有一个为 true，它就不会消失 */}
              <div 
                className={this.props.inputFocus || this.props.mouseInHot ? 'display-show header_center-left-hot-search' : 'display-hide header_center-left-hot-search'}
                // 2. 设置移入为 onMouseEnterHot，移出为 onMouseLeaveHot
                onMouseEnter={this.props.onMouseEnterHot}
                onMouseLeave={this.props.onMouseLeaveHot}
              >
                <div className="header_center-left-hot-search-title">
                  <span>热门搜索</span>
                  <span>
                    <i className="icon-change"></i>
                    <span>换一批</span>
                  </span>
                </div>
                <div className="header_center-left-hot-search-content">
                  {
                    this.props.list.map((item) => {
                      return <span key={item}>{item}</span>
                    })
                  }
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
    inputFocus: state.get('header').get('inputFocus'),
    list: state.get('header').get('list'),
    // 7. 在 index.js 中获取
    mouseInHot: state.get('header').get('mouseInHot'),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    searchFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    searchBlur() {
      dispatch(actionCreators.searchBlur());
    },
    // 3. 定义 onMouseEnterHot 和 onMouseLeaveHot 方法
    onMouseEnterHot() {
      dispatch(actionCreators.onMouseEnterHot());
    },
    onMouseLeaveHot() {
      dispatch(actionCreators.onMouseLeaveHot());
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
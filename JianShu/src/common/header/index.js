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
                  // 1. 给 searchFocus 传递 list
                  onFocus={() => this.props.searchFocus(this.props.list)}
                  onBlur={this.props.searchBlur}
                />
              </CSSTransition>
              <i className={this.props.inputFocus ? 'icon icon-search icon-active' : 'icon icon-search'}></i>
              <div 
                className={this.props.inputFocus || this.props.mouseInHot ? 'display-show header_center-left-hot-search' : 'display-hide header_center-left-hot-search'}
                onMouseEnter={this.props.onMouseEnterHot}
                onMouseLeave={this.props.onMouseLeaveHot}
              >
                <div className="header_center-left-hot-search-title">
                  <span>热门搜索</span>
                  <span onClick={() => this.props.changePage(this.props.page, this.props.totalPage, this.spinIcon)}>
                    <i className="icon-change" ref={(icon) => {this.spinIcon = icon}}></i>
                    <span className="span-change">换一批</span>
                  </span>
                </div>
                <div className="header_center-left-hot-search-content">
                  {
                    this.props.list.map((item, index) => {
                      if(index >= (this.props.page - 1) * 10 && index < this.props.page * 10) {
                        return <span key={item}>{item}</span>
                      } else {
                        return '';
                      }
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
    mouseInHot: state.get('header').get('mouseInHot'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    searchFocus(list) {
      // 2. 判断 list 的 size 是不是等于 0，是的话才请求数据（第一次），不是的话则不请求
      if(list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    searchBlur() {
      dispatch(actionCreators.searchBlur());
    },
    onMouseEnterHot() {
      dispatch(actionCreators.onMouseEnterHot());
    },
    onMouseLeaveHot() {
      dispatch(actionCreators.onMouseLeaveHot());
    },
    changePage(page, totalPage, spinIcon) {
      if(spinIcon.style.transform === 'rotate(360deg)') {
        spinIcon.style.transform = 'rotate(0deg)';
      } else {
        spinIcon.style.transform = 'rotate(360deg)';
      }
      if(page === totalPage) {
        page = 1;
        dispatch(actionCreators.changePage(page));
      } else {
        dispatch(actionCreators.changePage(page));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);

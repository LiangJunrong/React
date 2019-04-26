import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import './index.css';
import Logo from '../../assets/img/logo.svg';
import Search from '../../assets/img/icon_search.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <img className="header-container-logo" alt="Logo" src={Logo} />
          <ul className="header-container-nav">
            <li>
              <NavLink activeClassName="header-container-nav-active" to="/timeline">首页</NavLink>
            </li>
            <li>
              <NavLink activeClassName="header-container-nav-active" to="/pins">沸点</NavLink>
            </li>
            <li>
              <NavLink activeClassName="header-container-nav-active" to="/topics">话题</NavLink>
            </li>
            <li>
              <NavLink activeClassName="header-container-nav-active" to="/books">小册</NavLink>
            </li>
            <li>
              <NavLink activeClassName="header-container-nav-active" to="/events">活动</NavLink>
            </li>
          </ul>
          <ul className="header-container-right">
            <li className="header-container-search">
              <form>
                <input placeholder="搜索更新啦" />
                <img className="icon-search" alt="搜索" src={Search} />
              </form>
            </li>
            <li className="header-container-add">
              <div className="header-container-add-group">
                <button className="add-article">写文章</button>
                <div>
                  <button className="add-more"></button>
                </div>
              </div>
            </li>
            <Link to="" className="header-container-notice">
              <i className="icon icon-notice"></i>
              <span>4.3K</span>
            </Link>
            <Link to="" className="header-container-user">
              <img alt="头像" src="https://leancloud-gold-cdn.xitu.io/GBwwQOuUmqYmWWnSp5EjY3HTouKn5fAd0Ly5XHkO?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" />
            </Link>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;
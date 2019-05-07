import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="top-nav">
        <ul className="top-nav-list">
          <li className="top-nav-list-item">
            <NavLink to="/timeline/recommend" activeClassName="active">推荐</NavLink>
          </li>
          <li className="top-nav-list-item">
            <NavLink to="/timeline/following" activeClassName="active">关注</NavLink>
          </li>
          <li className="top-nav-list-item">
            <NavLink to="/timeline/backend" activeClassName="active">后端</NavLink>
          </li>
          <li className="top-nav-list-item">
            <NavLink to="/timeline/frontend" activeClassName="active">前端</NavLink>
          </li>
          <li className="top-nav-list-item">
            <NavLink to="/timeline/android" activeClassName="active">Android</NavLink>
          </li>
          <li className="top-nav-list-item">
            <NavLink to="/timeline/ios" activeClassName="active">IOS</NavLink>
          </li>
          <li className="top-nav-list-item">
            <NavLink to="/timeline/ai" activeClassName="active">人工智能</NavLink>
          </li>
          <li className="top-nav-list-item">
            <NavLink to="/timeline/freebie" activeClassName="active">开发工具</NavLink>
          </li>
          <li className="top-nav-list-item">
            <NavLink to="/timeline/career" activeClassName="active">代码人生</NavLink>
          </li>
          <li className="top-nav-list-item">
            <NavLink to="/timeline/article" activeClassName="active">阅读</NavLink>
          </li>
          <li className="top-nav-list-item top-nav-list-right">
            <NavLink to="/subscribe/subscribed" activeClassName="active">标签管理</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopNav extends Component {
  render() {
    return (
      <div className="top-nav">
        <ul className="top-nav-list">
          <li className="top-nav-list-item active">
            <Link to="tuijian">推荐</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="guanzhu">关注</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="houduan">后端</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="qianduan">前端</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="anzhuo">Android</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="ios">IOS</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="rengongzhineng">人工智能</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="kaifagongju">开发工具</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="daimarensheng">代码人生</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="yuedu">阅读</Link>
          </li>
          <li className="top-nav-list-item top-nav-list-right">
            <Link to="biaoqianguanli">标签管理</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default TopNav;
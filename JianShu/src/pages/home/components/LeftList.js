import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftList extends Component {
  render() {
    return (
      <div className="left-list">
        <div className="left-list-top">
          <ul className="left-list-top-left">
            <li className="active">
              <Link to='remen'>热门</Link>
            </li>
            <span>|</span>
            <li>
              <Link to='zuixin'>最新</Link>
            </li>
            <span>|</span>
            <li>
              <Link to='pinglun'>评论</Link>
            </li>
          </ul>
          <ul className="left-list-top-right">
            <li>
              <Link to='benzhouzuire'>本周最热</Link>
            </li>
            ·
            <li>
              <Link to='benyuezuire'>本月最热</Link>
            </li>
            ·
            <li>
              <Link to='lishizuire'>历史最热</Link>
            </li>
          </ul>
        </div>
        <div className="left-list-container">
          <div className="left-list-item">
            <div className="left-list-item-tag">
              <span className="hot">热</span>·
              <span className="special">专栏</span>·
              <span>木易杨说</span>·
              <span>一天前</span>·
              <span>JavaScript</span>
            </div>
            <h3 className="left-list-item-title">
              <Link to="detail">【半月刊 4】前端高频面试题及答案汇总</Link>
            </h3>
            <div className="left-list-item-interactive">
              <span>273</span>
              <span>5</span>
            </div>
          </div>
          <div className="left-list-item">
            <div className="left-list-item-tag">
              <span className="hot">热</span>·
              <span className="special">专栏</span>·
              <span>yck</span>·
              <span>1天前</span>·
              <span>JavaScript</span>
            </div>
            <h3 className="left-list-item-title">
              <Link to="detail">重学 JS：为啥 await 在 forEach 中不生效</Link>
            </h3>
            <div className="left-list-item-interactive">
              <span>159</span>
              <span>84</span>
            </div>
          </div>
          <div className="left-list-item">
            <div className="left-list-item-tag">
              <span className="special">专栏</span>·
              <span>大搜车无线开发中心</span>·
              <span>22小时前</span>·
              <span>前端/ESLint</span>
            </div>
            <h3 className="left-list-item-title">
              <Link to="detail">Prettier your project</Link>
            </h3>
            <div className="left-list-item-interactive">
              <span>29</span>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeftList;
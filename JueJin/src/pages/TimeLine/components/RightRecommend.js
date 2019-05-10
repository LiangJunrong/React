import React, { Component } from "react";
import { Link } from 'react-router-dom';

const number = Math.round(Math.random() + 1);

class RightRecommend extends Component {
  render() {
    return (
      <aside className="right-recommend">
        {/* 广告 */}
        <div className="right-recommend-ad">
          <a className={number === 1 ? 'show' : 'hide'} href="https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh" target="_blank" rel="noopener noreferrer">
            <img src={require('../../../assets/img/ad-ali.jpg')} alt="广告" />
          </a>
          <a className={number === 2 ? 'show' : 'hide'} href="https://cloud.tencent.com/act/southwest?fromSource=gwzcw.1083055.1083055.1083055&from=console&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9" target="_blank" rel="noopener noreferrer">
            <img src={require('../../../assets/img/ad-tencent.jpg')} alt="广告" />
          </a>
        </div>
        {/* 推荐作者 */}
        <div className="right-recommend-author">
          <p className="right-recommend-author-title">推荐作者</p>
          <ul className="right-recommend-author-detail">
            <li>
              <Link className="right-recommend-author-detail-item" to="/user">
                <img alt="图片" src="https://user-gold-cdn.xitu.io/2018/5/28/163a64ba4279f889?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" />
                <div className="right-recommend-author-detail-item-content">
                  <p>descire</p>
                  <p>大前端工程师</p>
                  <p>前端、JavaScript 领域贡献者</p>
                </div>
              </Link>
            </li>
            <li>
              <Link className="right-recommend-author-detail-item" to="/user">
                <img alt="图片" src="https://user-gold-cdn.xitu.io/2016/11/29/efff8bb4ab905084ea86b268cf89784e?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" />
                <div className="right-recommend-author-detail-item-content">
                  <p>大翰仔仔</p>
                  <p>前端</p>
                  <p>前端领域贡献者</p>
                </div>
              </Link>
            </li>
            <li>
              <Link className="right-recommend-author-detail-item" to="/user">
                <img alt="图片" src="https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg" />
                <div className="right-recommend-author-detail-item-content">
                  <p>前端小板凳</p>
                  <p>前端工程师 @ 美团</p>
                  <p>前端领域贡献者</p>
                </div>
              </Link>
            </li>
          </ul>
          <Link className="right-recommend-author-more" to="/recommendation/authors/recommended">查看更多 ></Link>
        </div>
        {/* 其他 */}
        <ul className="right-recommend-other">
          <li className="right-recommend-other-item">
            <img alt="图片" src="https://b-gold-cdn.xitu.io/v3/static/img/repos.28d0802.png" />
            <span>开源库</span>
          </li>
          <li className="right-recommend-other-item">
            <img alt="图片" src="https://b-gold-cdn.xitu.io/v3/static/img/collections.945b9ae.png" />
            <span>收藏集</span>
          </li>
          <li className="right-recommend-other-item">
            <img alt="图片" src="https://b-gold-cdn.xitu.io/v3/static/img/book.75582b2.png" />
            <span>掘金社区漫游指南</span>
          </li>
          <li className="right-recommend-other-item">
            <img alt="图片" src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-extension-icon.4b79fb4.png" />
            <span>下载掘金浏览器插件</span>
          </li>
          <li className="right-recommend-other-item">
            <img alt="图片" src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-miner.b78347c.png" />
            <span>前往掘金翻译计划</span>
          </li>
          <li className="right-recommend-other-item">
            <img alt="图片" src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-partner.4dd2d8c.png" />
            <span>商务合作</span>
          </li>
        </ul>
      </aside>
    )
  }
}

export default RightRecommend;
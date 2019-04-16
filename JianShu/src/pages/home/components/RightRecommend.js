import React, { Component } from 'react'

class RightRecommend extends Component {
  render() {
    return (
      <div className="right-recommend">
        <div className="right-recommend-ad" alt="广告">
          广告位
        </div>
        <div className="right-recommend-author">
          <div className="right-recommend-author-top">掘金优秀作者</div>
          <div className="right-recommend-author-container">
            <div className="right-recommend-author-item">
              <img alt="头像" src="https://user-gold-cdn.xitu.io/2018/9/28/1661ee2d90741789?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" />
              <div className="right-recommend-author-detail">
                <span className="right-recommend-author-title">纳兰不是容若</span>
                <span>前端开发</span>
                <span>前端领域贡献者</span>
              </div>
            </div>
            <div className="right-recommend-author-item">
              <img alt="头像" src="https://lc-gold-cdn.xitu.io/ada965bd605a3b55371b.jpg?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" />
              <div className="right-recommend-author-detail">
                <span className="right-recommend-author-title">纳兰不是容若</span>
                <span>前端开发</span>
                <span>前端领域贡献者</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RightRecommend;
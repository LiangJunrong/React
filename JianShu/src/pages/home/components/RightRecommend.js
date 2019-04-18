import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class RightRecommend extends Component {
  render() {
    return (
      <div className="right-recommend">
        <div className="right-recommend-ad">
          <a href="https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh" target="_blank" rel="noopener noreferrer">
            <img src={require('../../../resources/img/ad-ali.jpg')} alt="广告" />
          </a>
          <a href="https://cloud.tencent.com/act/southwest?fromSource=gwzcw.1083055.1083055.1083055&from=console&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9" target="_blank" rel="noopener noreferrer">
            <img src={require('../../../resources/img/ad-tencent.jpg')} alt="广告" />
          </a>
        </div>
        <div className="right-recommend-author">
          <div className="right-recommend-author-top">掘金优秀作者</div>
          <div className="right-recommend-author-container">
            {
              this.props.author.map((item) => {
                return (
                  <div className="right-recommend-author-item" key={item.get('id')}>
                    <img alt="头像" src={item.get('author').get('avatarLarge')} />
                    <div className="right-recommend-author-detail">
                      <span className="right-recommend-author-title">{item.get('author').get('username')}</span>
                      <span>{item.get('author').get('jobTitle')}</span>
                      <span>{item.get('description')}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getRightRecommendAuthor();
  }

}

const mapStateToProps = (state) => {
  return {
    author: state.get('home').get('rightRecommend')
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getRightRecommendAuthor() {
      dispatch(actionCreators.getRightRecommendAuthor());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(RightRecommend);
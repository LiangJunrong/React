import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

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
          {
            this.props.list.map((item) => {
              return (
                <div className="left-list-item" key={item.get('id')}>
                  <div className="left-list-item-tag">
                    <span className="hot">热</span>·
                    <span className="special">专栏</span>·
                    <span>
                      {
                        item.get('user').get('username')
                      }
                    </span>·
                    <span>一天前</span>·
                    <span>
                      {
                        item.get('tags').map((tagsItem, index) => {
                          if (index === 0) {
                            return tagsItem.get('title');
                          } else {
                            return null;
                          }
                        })
                      }
                    </span>
                  </div>
                  <h3 className="left-list-item-title">
                    <Link to="detail">{item.get('title')}</Link>
                  </h3>
                  <div className="left-list-item-interactive">
                    <span>{item.get('likeCount')}</span>
                    <span>{item.get('commentsCount')}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getLeftList();
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('leftNav')
  }
};

const mapDispathToProps = (dispatch) => {
  return {
    getLeftList() {
      dispatch(actionCreators.getLeftList());
    }
  }
};

export default connect(mapStateToProps, mapDispathToProps)(LeftList);
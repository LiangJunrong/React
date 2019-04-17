import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  leftNav: [
    {
      id: '5cb3cfa06fb9a068a54c95af',
      "commentsCount": 5,
      "hot": false,
      "hotIndex": 9807.2865,
      "original": true,
      "originalUrl": "https://juejin.im/post/5cb3376bf265da039c0543da",
      "rankIndex": 28.547673167633,
      "screenshot": "",
      "content": "半月刊第四期来啦，这段时间 Daily-Interview-Question 新增了 14 道高频面试题，今天就把最近半月汇总的面试题和部分答案发给大家，帮助大家查漏补缺，欢迎 加群 互相学习。 更多更全的面试题和答案汇总在下面的项目中，点击查看。 如果修改了，Vue 是如何监…",
      "summaryInfo": null,
      "category": { "name": "前端", "id": "5562b415e4b00c57d9b94ac8" },
      "tags": [
        { "id": "55964d83e4b08a686cc6b353", "title": "JavaScript" },
        { "id": "5597a05ae4b08a686ce56f6f", "title": "前端" }
      ],
      "title": "【半月刊 4】前端高频面试题及答案汇总",
      "type": "post",
      "user": {
        "id": "56dea4aa7664bf00559f002d",
        "role": "editor",
        "avatarHd": null,
        "avatarLarge": "https://user-gold-cdn.xitu.io/2018/10/19/16689e2bb057f60d?w=400&h=400&f=jpeg&s=16335",
        "username": "木易杨说"
      },
      "lastCommentTime": "2019-04-15T18:01:04.078Z",
      "likeCount": 207,
      "eventInfo": null,
      "viewerHasLiked": false,
      "createdAt": "2019-04-15T00:26:08.968Z",
      "updatedAt": "2019-04-16T00:07:18.352Z"
    },
    {
      id: '5cb3e4e66fb9a068ae265857',
      "commentsCount": 57,
      "hot": false,
      "hotIndex": 6278.71,
      "original": true,
      "originalUrl": "https://juejin.im/post/5cb1d5a3f265da03587bed99",
      "rankIndex": 20.390697440336,
      "screenshot": "",
      "content": "其实原因很简单，那就是 forEach 只支持同步代码。 从上述代码中我们可以发现，forEach 只是简单的执行了下回调函数而已，并不会去处理异步的情况。并且你在 callback 中即使使用 break 也并不能结束遍历。 一般来说解决的办法有两种。 这样可以生效的原因是 …",
      "summaryInfo": null,
      "category": { "name": "前端", "id": "5562b415e4b00c57d9b94ac8" },
      "tags": [
        { "id": "55964d83e4b08a686cc6b353", "title": "JavaScript" },
        { "id": "5597a05ae4b08a686ce56f6f", "title": "前端" }
      ],
      "title": "重学 JS：为啥 await 在 forEach 中不生效",
      "type": "post",
      "user": {
        "id": "574f8d8d2e958a005fd4edac",
        "role": "editor",
        "avatarHd": null,
        "avatarLarge": "https://user-gold-cdn.xitu.io/2018/10/30/166c3fd3666b5d05?w=200&h=200&f=jpeg&s=8287",
        "username": "yck"
      },
      "lastCommentTime": "2019-04-16T00:24:39.549Z",
      "likeCount": 108,
      "eventInfo": null,
      "viewerHasLiked": false,
      "createdAt": "2019-04-15T01:56:54.397Z",
      "updatedAt": "2019-04-16T00:07:16.727Z"
    },
  ],
  rightCommend: [],
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_LEFT_LIST:
      console.log(action.data);
      return state.set('leftNav', action.data)
    default:
      return state;
  }
}
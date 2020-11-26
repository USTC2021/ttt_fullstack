import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  render() {
    return (
      <div>
        {/* 评论App */}
        <CommentInput/>
        {/* 容器组件 */}
        <CommentList/>
      </div>
    )
  }
}

export default CommentApp;
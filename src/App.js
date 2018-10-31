import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.less';

// import NameCard from './components/NameCard';
// import LikesButton from './components/LikesButton';
// import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'
// const tags = ['恐龙','足球小子']

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments: ['this is my first reply']
    }
    this.addComment = this.addComment.bind(this)
    this.delComment = this.delComment.bind(this)
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  delComment(i) {
    // console.log(i)
  }
  

  render() {
    const { comments } = this.state
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello world!
          </p>
          <Button type="primary">Button</Button>
        </header>
        {/* <NameCard name="king" number={123456789} isHuman tags={tags}></NameCard> */}
        {/* <LikesButton></LikesButton> */}
        {/* <DigitalClock></DigitalClock> */}
        <CommentList 
          comments={comments}
          onDelComment={this.delComment}
        />
        <CommentBox 
          commentsLength={comments.length} 
          onAddComment={this.addComment}>
        </CommentBox>
      </div>
    );
  }
}

export default App;

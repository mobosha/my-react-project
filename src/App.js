import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.less';

import ThemeContext from './theme-context'
import ThemeBar from './components/ThemeBar'

import NameCard from './components/NameCard';


import LikesButton from './components/LikesButton';

import DigitalClock from './components/DigitalClock'

import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'

const tags = ['恐龙','足球小子']

const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222',
    color: '#fff'
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments: ['this is my first reply'],
      theme: 'light'
    }
    this.addComment = this.addComment.bind(this)
    this.delComment = this.delComment.bind(this)
    // this.changeTheme = this.changeTheme.bind(this)
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  delComment(i) {
    console.log(this)
    // console.log(i)
    // let lists = this.state.comments
    // lists.splice(i,1);
    // this.setState({
    //   comments: lists
    // })
    this.setState({
      comments: this.state.comments.filter((item, index) =>  index!==i)
    })
  }

  changeTheme(theme) {
    this.setState({
      theme
    })
  } 

  test() {
    console.log(this) //返回undefined
  }

  render() {
    const { comments } = this.state
    return ( 
      <ThemeContext.Provider value={themes[this.state.theme]}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>welcome to react</h1>
          <a href="#theme-switcher" className="btn btn-light"
          onClick={()=>{this.changeTheme('light')}}>
            浅色主题
          </a>
          <a href="#theme-switcher" className="btn btn-secondary"
          onClick={()=>{this.changeTheme('dark')}}>
            深色主题
          </a>
          <Button type="primary" onClick={this.test}>Button</Button>
        </header>

        
        <ThemeBar></ThemeBar>

        <NameCard name="king" number={123456789} isHuman tags={tags}></NameCard>
        
        
        <LikesButton></LikesButton>


        <DigitalClock></DigitalClock>


        <CommentList 
          comments={comments}
          onDelComment={this.delComment}
        />
        <CommentBox 
          commentsLength={comments.length} 
          onAddComment={this.addComment}>
        </CommentBox>


      </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;

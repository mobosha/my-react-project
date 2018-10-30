import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.less';

// import NameCard from './components/NameCard';
// import LikesButton from './components/LikesButton';
// import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
const tags = ['恐龙','足球小子']

class App extends Component {
  render() {
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
        <CommentBox></CommentBox>
      </div>
    );
  }
}

export default App;

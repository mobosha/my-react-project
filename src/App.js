import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.less';

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
      </div>
    );
  }
}

export default App;

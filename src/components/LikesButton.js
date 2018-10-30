import React, {Component} from 'react'

import { Button } from 'antd';

class LikesButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
    // this.increaseLikes = this.increaseLikes.bind(this);
  }
  increaseLikes() {
    console.log(this) // this指向当前组件实例
    this.setState({
      likes: ++this.state.likes
    })
  }


  render() {
    return (
      <div className="likes-button-component">
        <Button type="dashed" onClick={()=>{this.increaseLikes()}}>👍{this.state.likes}</Button>
      </div>
    )
  }
}

export default LikesButton
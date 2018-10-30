import React, {Component} from "react"

class CommentBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();  //阻止提交默认行为
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>留言内容</label>
          <input 
            type="text" 
            placeholder="请输入内容" 
            value={this.state.value} 
            onChange={this.handleChange}
          /> 
        </div>
        <button type="primary">留言</button>
      </form>
    )
  }
}

export default CommentBox
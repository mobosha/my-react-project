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
    // console.log(this.state.value);
    this.props.onAddComment(this.state.value)
    this.setState({
      value: ''
    })
    event.preventDefault();  //阻止提交默认行为
  }

  render() {
    return (
      <form>
        <div>
          <label>留言内容</label>
          <input 
            type="text" 
            placeholder="请输入内容" 
            value={this.state.value} 
            onChange={this.handleChange}
          /> 
        </div>
        <button type="button" onClick={this.handleSubmit}>留言</button>
        <p>已有{this.props.commentsLength}条评论</p>
      </form>
    )
  }
}

export default CommentBox
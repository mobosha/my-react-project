import React, {Component} from 'react'


class CommentList extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(index) {
    console.log(index.target)
    this.props.onDelComment(index);
  }

  render() {
    const {comments} = this.props
    return (
      <div>
        <label>评论列表</label>
        <ul>
          {
            comments.map((item, index)=>(
              <li key={index}>
                {item}
                <button type="primary" onClick={this.handleClick}>删除</button>
                {/* <button type="primary" onClick={()=>{this.handleClick(index)}}>删除</button> */}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default CommentList
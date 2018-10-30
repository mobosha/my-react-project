import React, {Component} from 'react'
import { Tag } from 'antd';


class NameCard extends React.Component {
  
  componentDidMount(){
    console.log(this.props.isHuman)
  }

  render() {
    const { name, number, isHuman, tags } = this.props 
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>电话:{number}</li>
          <li>{isHuman? '人类': '外星生物'}</li>
          <hr/>
          <div>
            {
              tags.map((item, index)=>(
                <Tag color="#f50" key={index}>{item}</Tag>
              ))
            }
          </div>
        </ul>
      </div>
    )
  }
}

export default NameCard
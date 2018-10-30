import React, {Component} from 'react'

class DigitalClock extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() { //初始化
    this.timer = setInterval(()=>{
      this.setState({
        date: new Date()
      })
    }, 3000)
  }

  componentDidUpdate(currentProps, currentState) { //更新
    console.log(currentState)
  }

  componentWillUnmount() {  //卸载
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="digital-clock-component jumbotron">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default DigitalClock
import React from 'react';
import TimerDisplay from './TimerDisplay'

export default class TemporaryComponent extends React.Component {

  constructor(props){
    super()
    this.state = {
      secondsRemaining: props.secondsToStickAround
    }
  }
  
  componentDidMount(){
    this.timerId = setInterval(() => {
      console.log("interval")
      this.setState({
        secondsRemaining: this.state.secondsRemaining - 1
      })
    }, 1000)
  }

  render(){
    return this.state.secondsRemaining >= 0 ? <TimerDisplay timerId={ this.timerId } number={ this.state.secondsRemaining } /> : ""
  }

}
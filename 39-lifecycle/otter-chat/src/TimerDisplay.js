import React from 'react';
export default class TimerDisplay extends React.Component {

  componentWillUnmount(){
    console.log("i die")
    clearTimeout(this.props.timerId)
  }

  render(){
    return <div>{ this.props.number }</div>
  }
}
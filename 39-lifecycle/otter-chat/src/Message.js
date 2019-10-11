import React from 'react';
import LikeButton from './LikeButton'

class Message extends React.Component {

  // constructor(){
  //   super()
  //   console.log(this)
  //   this.state = {

  //   }
  // }

  // state = {
  //   cocoCounter: 0,
  //   grapeCounter: 0,
  //   // potato: true
  // }

  // cocoButtonClicked = () => {
  //   // console.log(this.state)
  //   // this.state.counter += 1 //directly mutating state
  //   // console.log(this.state.counter)
  //   const counter = this.state.cocoCounter + 1;

  //   this.setState({
  //     // ...this.state,
  //     cocoCounter: counter
  //   })
  //   // }, () => {
  //   //   console.log(this.state.counter)
  //   // })
  //   // console.log(this.state.counter)
  // }

  // grapeButtonClicked = () => {
  //   this.setState({
  //     grapeCounter: this.state.grapeCounter + 1
  //   })
  // }

  // console.log(this.state) // NO

  render(){
    // console.log(this.likeButtonClicked)
    // console.log(this.props.message)
    // console.log("render")
    // console.log(this.state.potato)
    return (<li>
      { this.props.message.text }
      <LikeButton likeButtonCounter={ this.props.message.coconuts } 
                  clickHandler={ () => this.props.buttonClicked("coconuts", this.props.message.id) }
                  emoji={ "🥥" } />
      <LikeButton likeButtonCounter={ this.props.message.grapes } 
                  clickHandler={ () => this.props.buttonClicked("grapes", this.props.message.id) }
                  emoji={ "🍇" } />
    </li>)
  }

}

export default Message

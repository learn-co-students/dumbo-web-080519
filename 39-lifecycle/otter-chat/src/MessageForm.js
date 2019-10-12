import React from 'react';
import uuid from 'uuid'

const defaultState = {
  message: "Hi!",
  coconuts: 0
}

class MessageForm extends React.Component {

  state = {
    ...defaultState
  }

  formSubmitted = (event) => {
    event.preventDefault()
    this.props.createMessage({
      id: uuid(),
      text: this.state.message,
      coconuts: this.state.coconuts
    })
    this.setState({
      ...defaultState
    })
  }

  // coconutsInputChanged = (event) => {
  //   this.setState({
  //     coconuts: event.target.value
  //   })
  // }

  // messageInputChanged = (event) => {
  //   this.setState({
  //     message: event.target.value //(5).toString()
  //   })
  // }

  inputChanged = (event) => {
    // const thingToSetStateTo = {}
    // thingToSetStateTo[whichStateKeyToModify] = event.target.value
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (<form onSubmit={ this.formSubmitted }>
      <label htmlFor="coconuts">Coconuts</label>
      <input 
        type="number" 
        onChange={ this.inputChanged }
        value={ this.state.coconuts }
        name="coconuts"
        id="coconuts" />
      <label htmlFor="message">Message</label>
      <input 
        type="text" 
        onChange={ this.inputChanged }
        value={ this.state.message }
        name="message"
        id="message" />
        <input type="submit" />
    </form>)
  }

}

export default MessageForm

import React from 'react';
import MessageForm from './MessageForm'
import MessageList from './MessageList'

class MessageContainer extends React.Component {

  state = {
    channelName: "#holding-hands",
    // draftMessage: {},
    messages: [
      { 
        id: 1,
        text: "Purr",
        coconuts: 0
      },
      { 
        id: 2,
        text: "Chirp",
        coconuts: 12,
      },
      { 
        id: 3,
        text: "Chirp",
        coconuts: 22,
      },
      { 
        id: 4,
        text: "Purr",
        coconuts: 33
      }
    ]
  }

  createMessage = (message) => {
    // this.state.messages.push(message)
    this.setState({
      messages: [ ...this.state.messages, message ]
    })
  }

  render(){
    return (<React.Fragment>
      <MessageList messages={ this.state.messages } />
      <MessageForm createMessage={ this.createMessage } />
    </React.Fragment>)
  }

}

export default MessageContainer
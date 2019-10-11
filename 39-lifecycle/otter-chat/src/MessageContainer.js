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
      },
      { 
        id: 5,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 6,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 7,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 8,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 9,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 10,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 11,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 12,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 13,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 14,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 15,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 16,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 17,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 18,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 19,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 20,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 21,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 22,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 23,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 24,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 25,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 26,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 27,
        text: "Purr",
        coconuts: 33
      },
      { 
        id: 28,
        text: "Purr",
        coconuts: 33
      },
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
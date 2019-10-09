import React from 'react';
import Message from './Message'

class MessageList extends React.Component {

  // constructor(){
  //   super()
  //   this.state = {}
  // }

  state = {
    channelName: "#holding-hands",
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

  render(){

    return <ul>
     { 
        this.state.messages.map(message => {
           return <Message key={ message.id } message={ message } />
        }) 
    }
    </ul>
  }

}

export default MessageList

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
      "Purr",
      "Chirp",
      "Chirp",
      "Purr",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp",
      "Chirp"
    ]
  }

  render(){

    return <ul>
     { 
        this.state.messages.map(message => {
           return <Message message={ message } />
        }) 
    }
    </ul>
  }

}

export default MessageList

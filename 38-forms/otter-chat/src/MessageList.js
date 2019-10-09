import React from 'react';
import Message from './Message'

class MessageList extends React.Component {

  // constructor(){
  //   super()
  //   this.state = {}
  // }

  render(){

    return <ul>
     { 
        this.props.messages.map(message => {
           return <Message key={ message.id } message={ message } />
        }) 
    }
    </ul>
  }

}

export default MessageList

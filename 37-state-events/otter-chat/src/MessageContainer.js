import React from 'react';
import MessageForm from './MessageForm'
import MessageList from './MessageList'

class MessageContainer extends React.Component {

  render(){
    return (<React.Fragment>
      <MessageList />
      <MessageForm />
    </React.Fragment>)
  }

}

export default MessageContainer
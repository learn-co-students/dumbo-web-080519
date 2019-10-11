import React from 'react';
import Message from './Message'

class MessageList extends React.Component {

  constructor(){
    super()
    this.listRef = React.createRef();
  }

  componentDidMount(){
    this.scrollAllTheWayDown()
    // console.log("cdm")
  }

  scrollAllTheWayDown(){
    const messageListUl = this.listRef.current
    messageListUl.scrollTop = messageListUl.scrollHeight
  }


  componentDidUpdate(){
    this.scrollAllTheWayDown()
    // console.log("cdu")
  }


  render(){
    return <ul className="message-list" ref={ this.listRef }>
     { 
        this.props.messages.map(message => {
           return <Message key={ message.id } message={ message } />
        }) 
    }
    </ul>
  }
}

export default MessageList

import React from 'react';

class Message extends React.Component {

  render(){
    return <li>{ this.props.message }</li>
  }

}

export default Message

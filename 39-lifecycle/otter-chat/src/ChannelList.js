import React from 'react'

export default class ChannelList extends React.Component {

  state = {
    channels: []
  }

  componentDidMount() {
    // console.log("cdm")
    fetch("http://localhost:3000/channels")
      .then(res => res.json())
      .then(channels => this.setState({ channels/*: channels */}))
  }

  renderChannels(){
    return this.state.channels.map(channel => <li key={ channel.id }>
      #{ channel.name }
    </li>)
  }


  render(){
    // console.log("render")
    // console.log(this.state)
    return (<ul>{
      this.state.channels.length 
        ? this.renderChannels() 
        : <li>Loading...</li>
    }</ul>)
  }
}









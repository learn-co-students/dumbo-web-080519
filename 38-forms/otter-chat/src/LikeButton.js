import React, { Component } from 'react';

class LikeButton extends Component {

  // likeButtonClicked(){
  //   this.setState({})
  // }

  render(){
    // console.log(this.props)
    return (<button 
        onClick={ this.props.clickHandler }>
          <span role="img" alt="coconut">{ this.props.emoji }</span>
          { this.props.likeButtonCounter }
      </button>)
  }
}



export default LikeButton
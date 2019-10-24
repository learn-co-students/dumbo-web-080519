import React from 'react'
import { connect } from 'react-redux'
import { addFruit } from './actionCreators'

class AddFruit extends React.Component {

  render(){
    console.log(this.props)
    return <button onClick={ this.props.addFruit }>
      Add Apples
    </button>
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // graham: false,
    // kenny: false,
    addFruit: () => {
      // console.log("sdfjhsdfkjhdsj")
      dispatch(addFruit("apple"))
    }
  }
}

const wrapWithConnect = connect(undefined, mapDispatchToProps)

export default wrapWithConnect(AddFruit)
import React from 'react'
import { connect } from 'react-redux'
import { addFruit } from './actionCreators'

class AddFruit extends React.Component {

  state = {
    name: ""
  }

  onChange = ({ target: { value, name }}) => {
    this.setState({
      name: value
    })
    // console.log(this.xstate)
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addFruit(this.state.name)
    this.setState({
      name: ""
    })
  }

  render(){
    console.log("AddFruit")
    // console.log(this.props)
    return <form onSubmit={ this.onSubmit }>
      <label htmlFor="fruit-name">Fruit name (last added: { this.props.lastAdded.name }):</label>
      <input id="fruit-name" onChange={ this.onChange } type="text" name="name" value={ this.state.name } />
      <input type="submit" />
    </form>
/*
    <button onClick={ this.props.addFruit }>
      Add Apples
    </button>*/
  }
}

const mapStateToProps = state => {
  return {
    lastAdded: state.fruit[state.fruit.length - 1]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // graham: false,
    // kenny: false,
    addFruit: (fruitName) => {
      // console.log("sdfjhsdfkjhdsj")
      dispatch(addFruit(fruitName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFruit)










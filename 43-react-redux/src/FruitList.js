import React from 'react'
import { connect} from 'react-redux'

class FruitList extends React.Component {

  render(){
    // console.log(this.props);
    console.log("FruitList")

    return <ul>{
      this.props.fruitList.map(fruit => <li key={ fruit.id }>{ fruit.name }</li>)
    }</ul>
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    kenny: true,
    fruitList: state.fruit
  }
}
const wrapWithConnect = connect(mapStateToProps)
const FruitListConnectedToRedux = wrapWithConnect(FruitList)
export default FruitListConnectedToRedux





import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  state = {
    deadSush: []
  }

  trackSush = (sushi) => {
    this.setState({
      deadSush: [...this.state.deadSush, sushi]
    })
  }

  // console.log("I rendered")

  componentDidMount() {
    console.log("I, Sushi Container mounted!")
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("container updated")
  }
  

  renderSushis = () => {
    let {sushis, eaten, budget, eatSushi} = this.props
    return sushis.map(
      sushi => <Sushi 
                eaten={eaten} 
                sushi={sushi} 
                key={`sushi-${sushi.id}`}
                eatSushi={eatSushi}
                budget={budget}
                trackSush={this.trackSush}/>
    )
  }

  render() {
    let {moreSushi} = this.props
    console.log("I, SUSHI CONTAINER, RENDERED!")
    console.log(this.state)
      return (
        <Fragment>
          <div className="belt">
            {
              this.renderSushis()
            }
            <MoreButton moreSushi={moreSushi}/>
          </div>
        </Fragment>
      )
  }
}

export default SushiContainer
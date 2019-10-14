import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, eaten, budget, eatSushi, moreSushi}) => {

  // console.log("I rendered")

  const renderSushis = () => {
    return sushis.map(
      sushi => <Sushi 
                eaten={eaten} 
                sushi={sushi} 
                key={`sushi-${sushi.id}`}
                eatSushi={eatSushi}
                budget={budget}/>
    )
  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushis()
        }
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
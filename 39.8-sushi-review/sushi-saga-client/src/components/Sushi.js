import React, {Component, Fragment } from 'react'

class Sushi extends Component {

  render(){
    let {sushi, eaten, eatSushi, budget} = this.props
    
    return (
      <Fragment>
      <div className="sushi">
        <div className="plate" 
            onClick={() => eatSushi(sushi)}>
          { 
            eaten.includes(sushi) ?
              null
            :
              <img src={sushi.img_url} width="100%" alt={`${sushi.name}`}/>
          }
        </div>
        {
          budget >= 1 ?
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
        : <h4 className="sushi-details">
        {sushi.name} - Too expensive for you
        </h4>
        }
        
      </div>
      </Fragment>
    )
  }
}

export default Sushi
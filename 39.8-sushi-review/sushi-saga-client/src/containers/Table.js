import React, { Fragment } from 'react'

const Table = ({eaten, budget}) => {

  const renderPlates = (array) => {
    // console.log("array", array)
    return array.map((x, index) => {
      return <div className="empty-plate" 
      style={{ top: -7 * index }} 
      key={`plate-${index}`}/>
    })
  }

  return (
    <Fragment>
      { budget >= 1 ? 
      <h1 className="remaining">
      You have: ${budget} remaining!
    </h1>
    : 
    <h1 className="remaining">
      You don't have dollarz anymore, go to work
    </h1>
      }
      
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
import React, { Component } from 'react'
import  PigTile from './PigTile'

export default class PigContainer extends Component {

    componentDidMount () {
        console.log("Pig Container: I mounted!")
      }

      componentDidUpdate(prevProps){
        if(this.props !== prevProps){
          console.log("OMG THE CONTAINER UPDATE HAPPENED")
        } else {
          console.log("boredom")
        }
      }
      
    render() {
        // console.log("hogs are here", this.props.hogs)
        return (
            <div className="ui grid container">
                {
                    this.props.hogs.map(hog => {
                        return <PigTile key={hog.name} hog={hog}/>
                    })
                }
            </div>
        )
    }
}

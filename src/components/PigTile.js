import React, { Component } from 'react'

export default class PigTile extends Component {

    componentDidMount () {
        console.log("Tile: I mounted!")
      }

      componentDidUpdate(prevProps){
        if(this.props !== prevProps){
          console.log("OMG THE TILE UPDATE HAPPENED")
        } else {
          console.log("boredom")
        }
      }
    
          
      componentWillUnmount() {
          console.log("I died")
      }


    render() {
        
        // console.log("pig tile props", this.props.hog.name)
        let {name : pigName} = this.props.hog
        // console.log(pigName)
        let slug = pigName.replace(/\s/g, "_").toLowerCase()
        // console.log(slug)

        // let uglySlug = pigName.split(" ").join("_").toLowerCase()
        // console.log(uglySlug)
        console.log(`Tile ${slug} rendered!`)

        return (
            <div>
                <h2>{pigName}</h2>
                <img src={`../hog-imgs/${slug}.jpg`} alt="hog"/>
            </div>
        )
    }
}

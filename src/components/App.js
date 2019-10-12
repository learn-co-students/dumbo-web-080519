import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import FilterBar from './FilterBar'
import PigContainer from './PigContainer'
import hogs from '../porkers_data';

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';

class App extends Component {

  state =  { 
        sortValue: "All",
        filterValue: false,
  }

  handleSort = (newSortValue) => {
    this.setState({
      sortValue: newSortValue
    })
    // console.log("I've received a call!")
  }

  handleFilter = () => {
    this.setState({
      filterValue: !this.state.filterValue
    })
    // console.log("I am triggered!")
  }

  sortHogs = () => {
    let {sortValue} = this.state

    if(sortValue === "Name"){
      return [...hogs].sort((hogA, hogB) => {
        if(hogA.name > hogB.name){
          return 1
        } else if (hogA.name < hogB.name){
          return -1
        } else {
          return 0
        }
      }
      )
    } else if (sortValue === "Weight") {
      return [...hogs].sort((hogA, hogB) => {
        if(hogA[weight] > hogB[weight]){
          return 1
        } else if (hogA[weight] < hogB[weight]){
          return -1
        } else {
          return 0
        }
      }
      )
    } else {
      return [...hogs]
    }
  }

  applyFilter = (finalHogs) => {
    let {filterValue} = this.state
    return filterValue ? 
      finalHogs.filter(hog => {
      return hog.greased
      })
    : finalHogs
  }

  componentDidMount () {
    console.log("App: I mounted!")
  }

  componentDidUpdate(prevState){
    if(this.state !== prevState){
      console.log("OMG THE APP UPDATE HAPPENED")
    } else {
      console.log("boredom")
    }
  }


  render() {
    console.log("I RENDERED!")
    return (
      <div className="App">
          < Nav />
          <FilterBar handleSort={this.handleSort} handleFilter={this.handleFilter}/>
          <PigContainer hogs={this.applyFilter(this.sortHogs())}/>
      </div>
    )
  }
}

export default App;

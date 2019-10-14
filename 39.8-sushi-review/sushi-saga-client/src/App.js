import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state ={ 
    sushis: [],
    eaten: [],
    currentIndex: 0,
    budget: 100,
  }

  eatSushi = (sushi) => {
    let currentBudget = this.state.budget - sushi.price
    this.state.budget >= 0 ? 
      this.setState({
        eaten: [...this.state.eaten, sushi], 
        budget: currentBudget
      })
    : alert("no dollarz")
  }

  componentDidMount () {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }

  fourSushi = () => {
    const newNumber = this.state.currentIndex + 4
    return this.state.sushis.slice(this.state.currentIndex, newNumber)
  }

  moreSushi = () => {    
    let newNumber;

    if (this.state.currentIndex >= 98) {
      newNumber = 0 
      return this.setState({
        currentIndex: newNumber
      })
     } else {
      newNumber = this.state.currentIndex + 4
      return this.setState({
        currentIndex: newNumber
      })
     } 
  }

  render() {
    // console.log(this.state.currentIndex)
    // console.log("here are your eaten sush", this.state.eaten)
    // console.log("index", this.state.currentIndex)
    // console.log("fourSushi", this.fourSushi())
    // console.log("newNumber", this.moreSushi())
    // console.log("currentIndex", this.state.currentIndex)
    // console.log("dollarz", this.state.budget)

    return (
      <div className="app">
        <SushiContainer 
          sushis={this.fourSushi()} 
          eaten={this.state.eaten}
          eatSushi={this.eatSushi}
          moreSushi={this.moreSushi}
          budget= {this.state.budget}/>
        <Table 
        eaten={this.state.eaten}
        budget= {this.state.budget}/>
      </div>
    );
  }
}

export default App;
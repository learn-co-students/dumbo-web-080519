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
      this.setState(prevState => {
        return {
          eaten: [...prevState.eaten, sushi], 
          budget: currentBudget
        }
      })
    : alert("no dollarz")
  }

  fetchSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }

  componentDidMount () {
    this.fetchSushi()
  }

  fourSushi = () => {
    const newNumber = this.state.currentIndex + 4
    return this.state.sushis.slice(this.state.currentIndex, newNumber)
  }

  updateNumber = (newNumber) => {
    this.setState({
      currentIndex: newNumber
    })
  }

  moreSushi = () => {    
    let newNumber;
    this.state.currentIndex >= 96 ?  newNumber = 0 : newNumber = this.state.currentIndex + 4
    return newNumber
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.fourSushi()} 
          eaten={this.state.eaten}
          eatSushi={this.eatSushi}
          moreSushi={() => this.updateNumber(this.moreSushi())}
          budget= {this.state.budget}/>
        <Table 
        eaten={this.state.eaten}
        budget= {this.state.budget}/>
      </div>
    );
  }
}

export default App;
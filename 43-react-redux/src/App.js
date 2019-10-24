import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FruitList from './FruitList'
import AddFruit from './AddFruit'

class App extends React.Component {

  // state = {
  //   fruit: [
  //     "Blueberry",
  //     "Strawberry",
  //   ]
  // }

  render() {
    console.log("App")
    return (
      <div className="App">
        <FruitList />
        <AddFruit />
      </div>
    );
  }
}

export default App;

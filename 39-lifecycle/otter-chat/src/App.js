import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TemporaryComponent from './TemporaryComponent'
import MessageContainer from './MessageContainer'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MessageContainer />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
      <TemporaryComponent secondsToStickAround={ 5 } />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import LogIn from './LogIn'
import SnackDashboard from './SnackDashboard'


class App extends React.Component {

  state = {
    loggedInUserId: null,
    token: null
  }


  render(){
    return (<main>
      {
        <SnackDashboard />
      }
    </main>);
  }
}

export default App;

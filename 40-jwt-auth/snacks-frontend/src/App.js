import React from 'react';
import './App.css';
import LogIn from './LogIn'
import SnackDashboard from './SnackDashboard'


class App extends React.Component {

  state = {
    loggedInUserId: null,
    token: null
  }

  componentDidMount(){
    this.setState({
      loggedInUserId: localStorage.loggedInUserId,
      token: localStorage.token,
    })
  }

  setToken = (token, userId) => {
    localStorage.token = token
    localStorage.loggedInUserId = userId
    this.setState({
      token: token,
      loggedInUserId: userId
    })
  }

  render(){
    return (<main>
      {
        this.state.token ? <SnackDashboard token={ this.state.token } loggedInUserId={ this.state.loggedInUserId } /> : <LogIn setToken={ this.setToken } />
      }
    </main>);
  }
}

export default App;

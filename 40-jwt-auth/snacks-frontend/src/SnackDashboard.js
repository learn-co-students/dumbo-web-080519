import React from 'react';

class SnackDashboard extends React.Component {

  state = {
    allSnacks: [],
    mySnacks: []
  }

  componentDidMount(){
    const { token } = this.props
    fetch("http://localhost:3000/snacks")
      .then(res => res.json())
      .then(data => this.setState({
        allSnacks: data
      }))
  }

  render(){
    return (<>
      <section>
        <h2>All Snacks</h2>
        <ol>
          {
            // THIS IS NOT VERY DRY AND I OUGHT TO REFACTOR
            this.state.allSnacks.map(snack => <li key={ snack.id }>{ snack.name }</li>)
          }
        </ol>
      </section>
      <section>
        <h2>My Snacks</h2>
        <ol>
          {
            // THIS IS NOT VERY DRY AND I OUGHT TO REFACTOR
            this.state.mySnacks.map(snack => <li key={ snack.id }>{ snack.name }</li>)
          }
        </ol>
      </section>
    </>)
  }

}

export default SnackDashboard
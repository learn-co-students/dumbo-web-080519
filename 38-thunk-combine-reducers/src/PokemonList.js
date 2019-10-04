import React from 'react'
import { connect } from 'react-redux'

class PokemonList extends React.Component {

  render(){
    // console.log(this.props)
    return (<ul>
      {
        this.props.pokemon.map(poke => <li key={ poke.id }>
            { poke.name }
          </li>)
      }
    </ul>)
  }
}

// REACT ☝️
// ======================================
// REDUX 👇
const mapStateToProps = (state) => {
  // console.log(state)
  // console.log(state.pokemon)
  return {
    pokemon: state.pokemon,
    // princesses: state.disneyPrincesses
  }
}

// const wrapWithConnect = connect(mapStateToProps)
// const PokemonListConnectedToRedux = wrapWithConnect(PokemonList)
// export default PokemonListConnectedToRedux

export default connect(mapStateToProps)(PokemonList)





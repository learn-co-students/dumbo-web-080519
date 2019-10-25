import uuid from 'uuid'


const reducer = (state, action) => {
  // console.log("reducer got called")
  // console.log(state)
  // console.log(action)

  switch (action.type) {
    case "ADD_FRUIT":
      return {
        ...state,
        fruit: [ ...state.fruit, { id: uuid(), name: action.fruit } ]
      }
    default:
      return state
  }

}

export default reducer
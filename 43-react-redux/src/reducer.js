
const reducer = (state, action) => {
  // console.log("reducer got called")
  // console.log(state)
  // console.log(action)

  switch (action.type) {
    case "ADD_FRUIT":
      return {
        ...state,
        fruit: [ ...state.fruit, action.fruit ]
      }
    default:
      return state
  }

}

export default reducer
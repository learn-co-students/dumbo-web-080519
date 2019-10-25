
const reducer = (state, action) => {
  // console.log("reducer got called")
  // console.log(state)
  console.log(action)

  switch (action.type) {
    case "ADD_CHEESE_TO_LASAGNE":
      return {
      ...state,
      pasta: {
        ...state.pasta,
        lasagne: [...state.pasta.lasagne, "cheese"]
      }
    }
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
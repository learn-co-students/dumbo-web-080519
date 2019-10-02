import { createStore } from 'redux'


const initialState = {
  menuItems: [

  ]
}


const reducer = function(state, action){
  console.log(state)
  console.log(action) 

  // if (action.type === "CREATE_MENU_ITEM") {

  // }
  return state
}

// const store = createStore(reducer, initialState)


// store.dispatch({ })

// console.log(store.getState())

import { createStore } from 'redux'
import reducer from './reducer'
import actions from './actions'
import { addFruit } from './actionCreators'

const initialState = {
  quadratini: [],
  pasta: {
    lasagne: ["meatball"],
    fettucini: []
  },
  fruit: []
}

const store = createStore(reducer, initialState)

store.dispatch(actions.addCheeseToLasagne)

store.dispatch(addFruit("pizza"))

store.dispatch(addFruit("graham"))

store.dispatch(actions.skdjhfsdlkhjfsdkljfhds)


console.log(store)
console.log(store.getState())

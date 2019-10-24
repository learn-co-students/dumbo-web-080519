import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'

import { addFruit } from './actionCreators'

const defaultState = { fruit: [] }
const store = createStore(reducer, defaultState)

store.dispatch(addFruit("banana"))
// store.dispatch(addFruit("apple"))
store.dispatch(addFruit("pomagranate"))
store.dispatch(addFruit("watermelon"))


// console.log(store.getState())


ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// store.dispatch(addFruit("watermelon"))

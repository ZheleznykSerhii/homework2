import { combineReducers, createStore } from 'redux'
import counterReducer from './counterReducer'
import customerReducer from './customerReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  customer: customerReducer,
})

export const store = createStore(rootReducer)

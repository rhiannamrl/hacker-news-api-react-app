import { createStore, combineReducers, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import { stories } from './reducers/reducer'

export const rootReducer = combineReducers({
  stories
})

export default createStore(rootReducer, applyMiddleware(ThunkMiddleware))

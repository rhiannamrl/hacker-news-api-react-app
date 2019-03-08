import { createStore, combineReducers, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import { currentStories } from './reducers/reducer'

export const rootReducer = combineReducers({
  currentStories
})

export default createStore(rootReducer, applyMiddleware(ThunkMiddleware))

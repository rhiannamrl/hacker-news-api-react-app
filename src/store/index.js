import { createStore, combineReducers, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk'

export const rootReducer = combineReducers({})

export default createStore(rootReducer, applyMiddleware(ThunkMiddleware))

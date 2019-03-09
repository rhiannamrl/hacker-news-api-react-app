import { createStore, combineReducers, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import { stories } from './reducers/reducer'

export const rootReducer = combineReducers({
  stories
})

//if extra time set up local storage
// store cart in localStorage to retrieve after refresh!
/* store.subscribe(() => {
  if (Object.keys(store.getState().user).length === 0) {
    localStorage.setItem('reduxCart', JSON.stringify(store.getState().cart))
  }
}) */

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))

export default store
export * from './reducers/reducer'

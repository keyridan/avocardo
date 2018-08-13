import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'
import { loadState } from './localStorage'

export const history = createHistory()

const persistedState = loadState()

const middleware = [
  routerMiddleware(history),
  thunk,
  apiMiddleware,
]

const store = createStore(
  connectRouter(history)(rootReducer),
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store

import configureMockStore from 'redux-mock-store'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'

const middleware = [thunk, apiMiddleware]
const mockStore = configureMockStore(middleware)

export default mockStore

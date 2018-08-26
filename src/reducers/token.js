import { LOGIN_SUCCESS, LOGOUT } from '../constants'

const initState = {}
const token = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    case LOGOUT:
      return initState
    default:
      return state
  }
}

export default token

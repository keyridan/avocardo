import { LOGIN_SUCCESS } from '../constants'

const token = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default token

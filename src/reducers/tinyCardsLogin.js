import { LOGIN_BEGIN, LOGIN_FAILURE, LOGIN_SUCCESS, SET_IDENTIFIER, SET_PASSWORD } from '../constants'

const tinyCardsLogin = (state = {
  identifier: '', password: '', pending: false, auth: false,
}, action) => {
  switch (action.type) {
    case SET_IDENTIFIER:
      return {
        ...state,
        identifier: action.payload,
      }
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
    case LOGIN_BEGIN:
      return {
        ...state,
        pending: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        password: '',
        pending: false,
        auth: true,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
      }
    default:
      return state
  }
}

export default tinyCardsLogin

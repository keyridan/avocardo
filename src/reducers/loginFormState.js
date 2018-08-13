import { CHANGE_OPEN_LOGIN_FORM, LOGIN_SUCCESS } from '../constants'

const loginFormState = (loginFormOpenState = { open: false, anchorEl: null }, action) => {
  switch (action.type) {
    case CHANGE_OPEN_LOGIN_FORM:
      return {
        ...loginFormOpenState,
        open: !loginFormOpenState.open,
        anchorEl: action.payload,
      }
    case LOGIN_SUCCESS:
      return false
    default:
      return loginFormOpenState
  }
}

export default loginFormState

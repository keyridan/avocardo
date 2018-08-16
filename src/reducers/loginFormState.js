import { CHANGE_OPEN_LOGIN_FORM, CHANGE_SHOW_PASSWORD, LOGIN_SUCCESS } from '../constants'

const loginFormState = (loginFormOpenState = { open: false, showPassword: false, anchorEl: null }, action) => {
  switch (action.type) {
    case CHANGE_SHOW_PASSWORD:
      return {
        ...loginFormOpenState,
        showPassword: !loginFormOpenState.showPassword,
      }
    case CHANGE_OPEN_LOGIN_FORM:
      return {
        ...loginFormOpenState,
        open: !loginFormOpenState.open,
        anchorEl: action.payload,
        showPassword: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...loginFormOpenState,
        open: false,
        showPassword: false,
      }
    default:
      return loginFormOpenState
  }
}

export default loginFormState

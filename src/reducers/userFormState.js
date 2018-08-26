import { CHANGE_OPEN_USER_FORM, LOGOUT } from '../constants'

const initState = { open: false, anchorEl: null }
const userFormState = (userFormOpenState = initState, action) => {
  switch (action.type) {
    case CHANGE_OPEN_USER_FORM:
      return {
        ...userFormOpenState,
        open: !userFormOpenState.open,
        anchorEl: action.payload,
      }
    case LOGOUT:
      return initState
    default:
      return userFormOpenState
  }
}

export default userFormState

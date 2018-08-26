import { CHOOSE_DECK, LOGOUT } from '../constants'

const initState = ''
const deck = (state = initState, action) => {
  switch (action.type) {
    case CHOOSE_DECK:
      return action.payload
    case LOGOUT:
      return initState
    default:
      return state
  }
}

export default deck

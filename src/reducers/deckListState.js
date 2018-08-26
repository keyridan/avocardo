import { CHANGE_DECK_LIST_STATE, LOGOUT } from '../constants'


const initState = false
const deckListState = (deckListOpenState = initState, action) => {
  switch (action.type) {
    case CHANGE_DECK_LIST_STATE:
      return !deckListOpenState
    case LOGOUT:
      return initState
    default:
      return deckListOpenState
  }
}

export default deckListState

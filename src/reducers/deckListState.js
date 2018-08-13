import { CHANGE_DECK_LIST_STATE } from '../constants'

const deckListState = (deckListOpenState = false, action) => {
  switch (action.type) {
    case CHANGE_DECK_LIST_STATE:
      return !deckListOpenState
    default:
      return deckListOpenState
  }
}

export default deckListState

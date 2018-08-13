import { ADD_CARD_TO_DECK_BEGIN, ADD_CARD_TO_DECK_FAILURE, ADD_CARD_TO_DECK_SUCCESS } from '../constants'

const addCardToDeckPending = (state = false, action) => {
  switch (action.type) {
    case ADD_CARD_TO_DECK_BEGIN:
      return true
    case ADD_CARD_TO_DECK_SUCCESS:
    case ADD_CARD_TO_DECK_FAILURE:
      return false
    default:
      return state
  }
}

export default addCardToDeckPending

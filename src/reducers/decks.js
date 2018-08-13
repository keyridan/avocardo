import { FETCH_DECKS_SUCCESS } from '../constants'

const decks = (state = [], action) => {
  switch (action.type) {
    case FETCH_DECKS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default decks

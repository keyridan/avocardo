import { CHOOSE_DECK } from '../constants'

const deck = (state = '', action) => {
  switch (action.type) {
    case CHOOSE_DECK:
      return action.payload
    default:
      return state
  }
}

export default deck

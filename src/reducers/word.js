import { SET_WORD } from '../constants'

const word = (state = '', action) => {
  switch (action.type) {
    case SET_WORD:
      return action.payload
    default:
      return state
  }
}

export default word

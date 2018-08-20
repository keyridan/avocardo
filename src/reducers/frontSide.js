import { ADD_CARD_TO_DECK_SUCCESS, SET_CARD_VALUES, SET_FRONT_SIDE } from '../constants'

const frontSide = (state = '', action) => {
  switch (action.type) {
    case SET_CARD_VALUES:
      return action.payload.frontSide
    case SET_FRONT_SIDE:
      return {
        ...state,
        frontSide: action.payload,
      }
    case ADD_CARD_TO_DECK_SUCCESS:
      return ''
    default:
      return state
  }
}

export default frontSide

import { ADD_CARD_TO_DECK_SUCCESS, SET_CARD_VALUES, SET_FRONT_SIDE } from '../constants'

const defaultValue = {
  checkedItems: 0,
  maxCheckedItems: 1,
  values: [''],
}

const frontSide = (state = defaultValue, action) => {
  switch (action.type) {
    case SET_CARD_VALUES:
      return {
        ...state,
        values: [action.payload.frontSide],
      }
    case SET_FRONT_SIDE:
      return action.payload
    case ADD_CARD_TO_DECK_SUCCESS:
      return defaultValue
    default:
      return state
  }
}

export default frontSide

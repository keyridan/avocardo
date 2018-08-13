import {
  ADD_CARD_TO_DECK_SUCCESS,
  SET_BACK_SIDE,
  SET_CARD_VALUES,
  SET_FRONT_SIDE,
  TOGGLE_OPTION,
  TOGGLE_OPTION_ERROR,
} from '../constants'

const defaultBackSides = [{
  value: '',
  checked: 0,
}, {
  value: '',
  checked: 0,
}, {
  value: '',
  checked: 0,
}]

const defaultFlashCard = {
  frontSide: '',
  backSide: defaultBackSides,
}

const flashCard = (state = defaultFlashCard, action) => {
  switch (action.type) {
    case SET_CARD_VALUES:
      return action.payload
    case SET_FRONT_SIDE:
      return {
        ...state,
        frontSide: action.payload,
      }
    case TOGGLE_OPTION:
    case SET_BACK_SIDE:
      return {
        ...state,
        backSide: action.payload,
      }
    case TOGGLE_OPTION_ERROR:
      return state
    case ADD_CARD_TO_DECK_SUCCESS:
      return defaultFlashCard
    default:
      return state
  }
}

export default flashCard

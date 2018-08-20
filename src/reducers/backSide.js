import {
  ADD_CARD_TO_DECK_SUCCESS,
  SET_BACK_SIDE,
  SET_CARD_VALUES,
  TOGGLE_OPTION,
  TOGGLE_OPTION_ERROR,
} from '../constants'

const defaultBackSide = {
  checkedItems: 0,
  maxCheckedItems: 3,
  values: [{
    value: '',
    checked: 0,
  }, {
    value: '',
    checked: 0,
  }, {
    value: '',
    checked: 0,
  }],
}

const flashCard = (state = defaultBackSide, action) => {
  switch (action.type) {
    case SET_CARD_VALUES:
      return {
        ...state,
        checkedItems: 0,
        values: action.payload.backSide,
      }
    case TOGGLE_OPTION:
    case SET_BACK_SIDE:
      return action.payload
    case TOGGLE_OPTION_ERROR:
      return state
    case ADD_CARD_TO_DECK_SUCCESS:
      return defaultBackSide
    default:
      return state
  }
}

export default flashCard

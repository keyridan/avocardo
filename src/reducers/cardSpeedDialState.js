import { CHANGE_OPEN_CARD_SPEED_DIAL_STATE, CHANGE_OPEN_INPUT_IMAGE_STATE } from '../constants'

const defaultState = {
  open: false,
  openInputImage: false,
}

const cardSpeedDialState = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_OPEN_CARD_SPEED_DIAL_STATE:
      return {
        ...state,
        open: action.payload,
      }
    case CHANGE_OPEN_INPUT_IMAGE_STATE:
      return {
        ...state,
        openInputImage: !state.openInputImage,
      }
    default:
      return state
  }
}

export default cardSpeedDialState

import { CHANGE_ADD_BACK_SIDE_SPEED_DIAL_STATE, CHANGE_OPEN_INPUT_IMAGE_STATE } from '../constants'

const defaultState = {
  open: false,
  openInputImage: false,
}

const addBackSideSpeedDialState = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ADD_BACK_SIDE_SPEED_DIAL_STATE:
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

export default addBackSideSpeedDialState

import { CHANGE_CHOOSE_LANGUAGE_STATE } from '../constants'

const chooseLanguageState = (state = { open: false, anchorEl: null }, action) => {
  switch (action.type) {
    case CHANGE_CHOOSE_LANGUAGE_STATE:
      return {
        ...state,
        open: !state.open,
        anchorEl: action.payload,
      }
    default:
      return state
  }
}

export default chooseLanguageState

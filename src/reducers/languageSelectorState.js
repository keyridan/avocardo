import { CHANGE_RECENT_FROM_LANGUAGE_SELECTOR_STATE, CHANGE_RECENT_TO_LANGUAGE_SELECTOR_STATE, } from '../constants'

const defaultState = {
  toLanguageSelectorOpen: false,
  fromLanguageSelectorOpen: false,
}

const images = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_RECENT_TO_LANGUAGE_SELECTOR_STATE:
      return {
        ...state,
        toLanguageSelectorOpen: !state.toLanguageSelectorOpen,
      }
    case CHANGE_RECENT_FROM_LANGUAGE_SELECTOR_STATE:
      return {
        ...state,
        fromLanguageSelectorOpen: !state.fromLanguageSelectorOpen,
      }
    default:
      return state
  }
}

export default images

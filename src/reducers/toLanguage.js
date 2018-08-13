import { CHOOSE_TO_LANGUAGE, DEFAULT_TO_LANGUAGE } from '../constants'

const toLanguage = (state = DEFAULT_TO_LANGUAGE, action) => {
  switch (action.type) {
    case CHOOSE_TO_LANGUAGE:
      return action.payload === 'AUTO' ? DEFAULT_TO_LANGUAGE : action.payload
    default:
      return state
  }
}

export default toLanguage

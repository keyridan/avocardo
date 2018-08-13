import { DEFAULT_FROM_LANGUAGE, CHOOSE_FROM_LANGUAGE } from '../constants'

const fromLanguage = (state = DEFAULT_FROM_LANGUAGE, action) => {
  switch (action.type) {
    case CHOOSE_FROM_LANGUAGE:
      return action.payload
    default:
      return state
  }
}

export default fromLanguage

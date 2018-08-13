import { CHOOSE_LANGUAGE } from '../constants'

const language = (state = 'en', action) => {
  switch (action.type) {
    case CHOOSE_LANGUAGE:
      return action.payload
    default:
      return state
  }
}

export default language

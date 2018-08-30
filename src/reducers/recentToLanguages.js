import { CHOOSE_RECENT_TO_LANGUAGE } from '../constants'

const recentToLanguages = (state = ['DE', 'EN', 'FR'], action) => {
  switch (action.type) {
    case CHOOSE_RECENT_TO_LANGUAGE:
      return [
        ...action.payload,
      ]
    default:
      return state
  }
}

export default recentToLanguages

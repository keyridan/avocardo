import { CHOOSE_RECENT_FROM_LANGUAGE } from '../constants'

const recentFromLanguages = (state = ['DE', 'EN', 'FR'], action) => {
  switch (action.type) {
    case CHOOSE_RECENT_FROM_LANGUAGE:
      return [
        ...action.payload,
      ]
    default:
      return state
  }
}

export default recentFromLanguages

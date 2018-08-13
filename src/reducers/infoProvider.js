import { CHANGE_INFO_SWITCHER_STATE, INFO_PROVIDERS } from '../constants'

const defaultProviderState = () => {
  const defaultState = {}
  INFO_PROVIDERS.forEach((provider) => {
    defaultState[provider] = {
      checked: true,
    }
  })
  return defaultState
}

const infoProvider = (state = defaultProviderState(), action) => {
  switch (action.type) {
    case CHANGE_INFO_SWITCHER_STATE:
      return action.payload
    default:
      return state
  }
}

export default infoProvider

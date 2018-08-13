import { CHANGE_THEME_TYPE_STATE, THEME_TYPES } from '../constants'

const themeType = (state = THEME_TYPES.LIGHT, action) => {
  switch (action.type) {
    case CHANGE_THEME_TYPE_STATE:
      return state.isDark
        ? THEME_TYPES.LIGHT
        : THEME_TYPES.DARK
    default:
      return state
  }
}

export default themeType

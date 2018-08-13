import { TRANSLATE_BEGIN, TRANSLATE_SUCCESS } from '../constants'

const translation = (state = { translatePending: false }, action) => {
  switch (action.type) {
    case TRANSLATE_BEGIN:
      return {
        ...state,
        translatePending: true,
      }

    case TRANSLATE_SUCCESS:
      return {
        ...state,
        translatePending: false,
        ...action.payload,
      }

    default:
      return state
  }
}

export default translation

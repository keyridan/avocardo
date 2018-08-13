import { SET_TRANSLATION_RESULT } from '../constants'

const translationResult = (state = { wordTo: '', options: [] }, action) => {
  switch (action.type) {
    case SET_TRANSLATION_RESULT:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default translationResult

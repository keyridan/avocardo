import { FETCH_DECKS_BEGIN, FETCH_DECKS_FAILURE, FETCH_DECKS_SUCCESS, LOGOUT } from '../constants'

const initState = { pending: false, values: [] }
const decks = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DECKS_BEGIN:
      return {
        ...state,
        pending: true,
      }
    case FETCH_DECKS_FAILURE:
      return {
        ...state,
        pending: false,
      }
    case FETCH_DECKS_SUCCESS:
      return {
        ...state,
        pending: false,
        values: action.payload,
      }
    case LOGOUT:
      return initState
    default:
      return state
  }
}

export default decks

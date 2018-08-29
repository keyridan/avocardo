import {
  ADD_CARD_TO_DECK_FAILURE,
  ADD_CARD_TO_DECK_FAILURE_MESSAGE,
  ADD_CARD_TO_DECK_SUCCESS,
  ADD_CARD_TO_DECK_SUCCESS_MESSAGE,
  ADD_CARD_TO_DECK_UNAUTHORIZED_MESSAGE,
  CLOSE_MESSAGE,
  FETCH_DECKS_FAILURE,
  FETCH_DECKS_FAILURE_MESSAGE,
  FETCH_DECKS_UNAUTHORIZED_MESSAGE,
  IMAGES_REQUEST_FAILURE,
  IMAGES_REQUEST_FAILURE_MESSAGE,
  INFO_MESSAGE,
  LOAD_NEXT_PAGE_IMAGES_REQUEST_FAILURE,
  LOGIN_FAILURE,
  LOGIN_FAILURE_MESSAGE,
  MESSAGE_TYPES,
  SOMETHING_WENT_WRONG_MESSAGE,
  TRANSLATE_FAILURE,
  TRANSLATE_FAILURE_TEXT,
  TRANSLATE_SUCCESS,
} from '../constants'
import parseErrorMessages from '../utils/parseErrorMessages'

const defaultValue = {
  translatedText: '',
  text: '',
  open: false,
}

function requestFailureMessage(action, defaultMessage, specifiedMessages) {
  const parsedValue = parseErrorMessages(action.payload, specifiedMessages)
  const errorOrEmpty = parsedValue && parsedValue === SOMETHING_WENT_WRONG_MESSAGE ? action.payload.error : ''
  return {
    open: true,
    text: parsedValue ? errorOrEmpty : action.payload,
    translatedText: parsedValue || defaultMessage,
    type: MESSAGE_TYPES.ERROR,
  }
}

const message = (state = defaultValue, action) => {
  const failureMessage = (defaultMessage, specifiedMessages) => requestFailureMessage(action, defaultMessage, specifiedMessages)
  switch (action.type) {
    case ADD_CARD_TO_DECK_SUCCESS:
      return action.payload ? {
        open: true,
        translatedText: ADD_CARD_TO_DECK_SUCCESS_MESSAGE,
        type: MESSAGE_TYPES.SUCCESS,
      } : {
        open: true,
        translatedText: SOMETHING_WENT_WRONG_MESSAGE,
        type: MESSAGE_TYPES.ERROR,
      }
    case TRANSLATE_SUCCESS:
      return action.payload.errorMessages && action.payload.errorMessages.length > 0
        ? {
          open: true,
          translatedText: INFO_MESSAGE,
          text: action.payload.errorMessages.join(';'),
          type: MESSAGE_TYPES.INFO,
        }
        : defaultValue
    case ADD_CARD_TO_DECK_FAILURE:
      return failureMessage(ADD_CARD_TO_DECK_FAILURE_MESSAGE, {
        401: ADD_CARD_TO_DECK_UNAUTHORIZED_MESSAGE,
      })
    case FETCH_DECKS_FAILURE:
      return failureMessage(FETCH_DECKS_FAILURE_MESSAGE, {
        401: FETCH_DECKS_UNAUTHORIZED_MESSAGE,
      })
    case LOAD_NEXT_PAGE_IMAGES_REQUEST_FAILURE:
    case IMAGES_REQUEST_FAILURE:
      return failureMessage(IMAGES_REQUEST_FAILURE_MESSAGE)
    case TRANSLATE_FAILURE:
      return failureMessage(TRANSLATE_FAILURE_TEXT)
    case LOGIN_FAILURE:
      return failureMessage(LOGIN_FAILURE_MESSAGE, {
        401: LOGIN_FAILURE_MESSAGE,
      })
    case CLOSE_MESSAGE:
      return {
        ...defaultValue,
        type: state.type,
      }
    default:
      return state
  }
}

export default message

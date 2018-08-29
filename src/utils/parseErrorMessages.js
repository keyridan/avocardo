import { FORBIDDEN_MESSAGE, INTERNAL_ERROR, SOMETHING_WENT_WRONG_MESSAGE, UNAUTHORIZED_MESSAGE } from '../constants'

const specifiedOrDefaultError = (specifiedMessages, status, defaultErrorMessage) => (
  specifiedMessages && specifiedMessages[status] ? specifiedMessages[status] : defaultErrorMessage
)

const parseErrorByType = (payload, specifiedMessages) => {
  const specifiedOrDefaultErrorMessage = defaultErrorMessage =>
    specifiedOrDefaultError(specifiedMessages, payload.status, defaultErrorMessage)
  switch (payload.status) {
    case 401:
      return specifiedOrDefaultErrorMessage(UNAUTHORIZED_MESSAGE)
    case 403:
      return specifiedOrDefaultErrorMessage(FORBIDDEN_MESSAGE)
    case 500:
      return specifiedOrDefaultErrorMessage(INTERNAL_ERROR)
    default:
      return SOMETHING_WENT_WRONG_MESSAGE
  }
}

const parseErrorMessages = (payload, specifiedMessages) => (
  !payload.status
    ? ''
    : parseErrorByType(payload, specifiedMessages)
)

export default parseErrorMessages

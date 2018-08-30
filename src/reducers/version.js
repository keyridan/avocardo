import { STORE_VERSION } from '../constants'

const defaultState = {
  value: STORE_VERSION,
}

const translation = (state = defaultState) => (state)

export default translation

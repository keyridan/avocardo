import { SET_INFO_VALUES } from '../constants'

const infos = (state = [], action) => {
  switch (action.type) {
    case SET_INFO_VALUES:
      return action.payload
    default:
      return state
  }
}

export default infos

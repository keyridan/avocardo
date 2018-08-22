import { CHANGE_CROP, CHANGE_ZOOM, READ_FILE, CROP_COMPLETED, IMAGE_CLEAN, SET_IMAGE } from '../constants'

const defaultState = {
  imageSrc: null,
  crop: { x: 0, y: 0 },
  zoom: 1,
  aspect: 20 / 23,
  croppedImage: null,
}

const image = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return action.payload
    case READ_FILE:
      return {
        ...state,
        crop: { x: 0, y: 0 },
        zoom: 1,
        imageSrc: action.payload,
      }
    case CHANGE_CROP:
      return {
        ...state,
        crop: action.payload,
      }
    case CHANGE_ZOOM:
      return {
        ...state,
        zoom: action.payload,
      }
    case CROP_COMPLETED:
      return {
        ...state,
        croppedImage: action.payload,
      }
    case IMAGE_CLEAN:
      return defaultState
    default:
      return state
  }
}

export default image

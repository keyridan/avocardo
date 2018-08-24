import {
  CHANGE_CROP,
  CHANGE_IMAGE_SELECTOR_DIALOG_STATE,
  CHANGE_ZOOM,
  CROP_COMPLETED,
  IMAGE_CLEAN,
  IMAGE_REQUEST_SUCCESS,
  READ_FILE,
  SET_IMAGE,
  SET_IMAGE_URL,
  SET_PHOTOS
} from '../constants'

const defaultState = {
  imageSrc: null,
  crop: { x: 0, y: 0 },
  zoom: 1,
  aspect: 20 / 23,
  croppedImage: null,
  imageUrl: 'https://pixabay.com/get/ea34b00c2bf5093ed1584d05fb1d4f9fe374e1d011ac104496f5c17ba2eab7b1_640.jpg',
  imageSelectorDialogState: false,
  photos: [],
  requestedImages: [],
}

const image = (state = defaultState, action) => {
  switch (action.type) {
    case IMAGE_REQUEST_SUCCESS:
      return {
        ...state,
        requestedImages: action.payload,
        imageSelectorDialogState: true,
      }
    case CHANGE_IMAGE_SELECTOR_DIALOG_STATE:
      return {
        ...state,
        imageSelectorDialogState: !state.imageSelectorDialogState,
      }
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      }
    case SET_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.payload,
      }
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

import {
  CLOSE_IMAGE_SELECTOR_DIALOG,
  IMAGE_CLEAN,
  IMAGES_REQUEST_BEGIN,
  IMAGES_REQUEST_SUCCESS,
  LOAD_NEXT_PAGE_IMAGES_REQUEST_BEGIN,
  LOAD_NEXT_PAGE_IMAGES_REQUEST_SUCCESS,
  SET_PHOTOS,
} from '../constants'

const defaultState = {
  imageSelectorDialogState: false,
  photos: [],
  perPage: 20,
  total: 0,
  page: 0,
  nextPageLoading: false,
  requestedImages: [],
}

const images = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_NEXT_PAGE_IMAGES_REQUEST_BEGIN:
      return {
        ...state,
        nextPageLoading: true,
      }
    case LOAD_NEXT_PAGE_IMAGES_REQUEST_SUCCESS:
      return {
        ...state,
        page: state.page + 1,
        nextPageLoading: false,
        requestedImages: action.payload.hits,
      }
    case IMAGES_REQUEST_BEGIN:
      return {
        ...state,
        nextPageLoading: true,
      }
    case IMAGES_REQUEST_SUCCESS:
      return {
        ...state,
        total: action.payload.totalHits,
        requestedImages: action.payload.hits,
        page: 1,
        nextPageLoading: false,
        imageSelectorDialogState: true,
      }
    case CLOSE_IMAGE_SELECTOR_DIALOG:
      return defaultState
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      }
    case IMAGE_CLEAN:
      return defaultState
    default:
      return state
  }
}

export default images

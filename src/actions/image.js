import { RSAA } from 'redux-api-middleware'
import {
  CHANGE_CROP,
  CHANGE_ZOOM,
  CLOSE_IMAGE_SELECTOR_DIALOG,
  CROP_COMPLETED,
  IMAGE_URL,
  IMAGES_REQUEST_BEGIN,
  IMAGES_REQUEST_FAILURE,
  IMAGES_REQUEST_SUCCESS,
  LOAD_NEXT_PAGE_IMAGES_REQUEST_BEGIN,
  LOAD_NEXT_PAGE_IMAGES_REQUEST_FAILURE,
  LOAD_NEXT_PAGE_IMAGES_REQUEST_SUCCESS,
  READ_FILE,
  READ_FILE_ERROR,
  SET_IMAGE_URL,
  SET_PHOTOS,
} from '../constants'
import { imageUrlSelector, pageImagesSelector, photosFromRequestedImagesSelector, photosSelector } from '../selectors'
import { getImage } from '../utils/image'

export const changeZoom = value => ({
  type: CHANGE_ZOOM,
  payload: value,
})

export const changeCrop = value => ({
  type: CHANGE_CROP,
  payload: value,
})

export const readFileError = () => ({
  type: READ_FILE_ERROR,
})

export const changeFile = imageDataUrl => ({
  type: READ_FILE,
  payload: imageDataUrl,
})

export const cropCompleted = croppedImage => ({
  type: CROP_COMPLETED,
  payload: croppedImage,
})

export const setImageUrl = value => ({
  type: SET_IMAGE_URL,
  payload: value,
})

const changeFileWithUrl = imageUrl => (dispatch) => {
  getImage(imageUrl, (err, uri) => {
    if (!err) {
      dispatch(changeFile(uri))
    } else {
      console.log('Error: ', err)
      dispatch(readFileError())
    }
  })
}

function isUrl(str) {
  return false
}

export const closeImageSelectorDialog = () => ({
  type: CLOSE_IMAGE_SELECTOR_DIALOG,
})

export const setPhotos = values => ({
  type: SET_PHOTOS,
  payload: values,
})

export const searchImages = (value) => {
  const endpoint = `${IMAGE_URL}${decodeURIComponent(value)}`
  return {
    [RSAA]: {
      endpoint,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [IMAGES_REQUEST_BEGIN, IMAGES_REQUEST_SUCCESS, IMAGES_REQUEST_FAILURE],
    },
  }
}

export const loadNextPageImages = () => (dispatch, getState) => {
  const state = getState()
  const value = imageUrlSelector(state)
  const pageNumber = pageImagesSelector(state) + 1
  const endpoint = `${IMAGE_URL}${decodeURIComponent(value)}&pageNumber=${pageNumber}`
  return dispatch({
    [RSAA]: {
      endpoint,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        LOAD_NEXT_PAGE_IMAGES_REQUEST_BEGIN,
        LOAD_NEXT_PAGE_IMAGES_REQUEST_SUCCESS,
        LOAD_NEXT_PAGE_IMAGES_REQUEST_FAILURE],
    },
  })
    .then(() => {
      const newState = getState()
      const newPhotos = [
        ...photosSelector(newState),
        ...photosFromRequestedImagesSelector(newState),
      ]
      dispatch(setPhotos(newPhotos))
    })
}

export const searchImagesAndSetPhotos = value => (dispatch, getState) => {
  dispatch(searchImages(value))
    .then(() => {
      dispatch(setPhotos(photosFromRequestedImagesSelector(getState())))
    })
}

export const setFileWithImageUrl = () => (dispatch, getState) => {
  const imageUrl = imageUrlSelector(getState())
  dispatch(isUrl(imageUrl)
    ? changeFileWithUrl(imageUrl)
    : searchImagesAndSetPhotos(imageUrl))
}

export const selectPhoto = item => (dispatch) => {
  dispatch(changeFileWithUrl(item.src))
  dispatch(closeImageSelectorDialog())
}

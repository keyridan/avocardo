import { RSAA } from 'redux-api-middleware'
import {
  CHANGE_CROP,
  CHANGE_IMAGE_SELECTOR_DIALOG_STATE,
  CHANGE_ZOOM,
  CROP_COMPLETED,
  IMAGE_REQUEST_BEGIN,
  IMAGE_REQUEST_FAILURE,
  IMAGE_REQUEST_SUCCESS,
  IMAGE_URL,
  READ_FILE,
  READ_FILE_ERROR,
  SET_IMAGE_URL,
  SET_PHOTOS
} from '../constants'
import { imageUrlSelector, photosSelector, requestedImagesSelector } from '../selectors'
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

export const changeImageSelectorDialogState = () => ({
  type: CHANGE_IMAGE_SELECTOR_DIALOG_STATE,
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
      types: [IMAGE_REQUEST_BEGIN, IMAGE_REQUEST_SUCCESS, IMAGE_REQUEST_FAILURE],
    },
  }
}

export const searchImagesAndSetPhotos = value => (dispatch, getState) => {
  dispatch(searchImages(value)).then(() => {
    const photos = requestedImagesSelector(getState()).map(image => ({
      src: image.webformatURL,
      width: 1,
      height: 1,
    }))
    dispatch(setPhotos(photos))
  })
}

export const setFileWithImageUrl = () => (dispatch, getState) => {
  const imageUrl = imageUrlSelector(getState())
  dispatch(isUrl(imageUrl)
    ? changeFileWithUrl(imageUrl)
    : searchImagesAndSetPhotos(imageUrl))
}

export const selectPhoto = obj => (dispatch, getState) => {
  const photos = photosSelector(getState())
  dispatch(changeFileWithUrl(photos[obj.index].src))
  dispatch(changeImageSelectorDialogState())
}

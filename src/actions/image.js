import { CHANGE_CROP, CHANGE_ZOOM, CROP_COMPLETED, READ_FILE, SET_IMAGE_URL } from '../constants'
import { imageUrlSelector } from '../selectors'
import { getImage } from '../utils/image'

export const changeZoom = value => ({
  type: CHANGE_ZOOM,
  payload: value,
})

export const changeCrop = value => ({
  type: CHANGE_CROP,
  payload: value,
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

export const setFileWithImageUrl = () => (dispatch, getState) => {
  const imageUrl = imageUrlSelector(getState())
  getImage(imageUrl, (err, uri) => {
    dispatch(changeFile(uri))
  })
}

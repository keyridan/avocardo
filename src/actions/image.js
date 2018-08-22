import { CHANGE_CROP, CHANGE_ZOOM, CROP_COMPLETED, READ_FILE } from '../constants'

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

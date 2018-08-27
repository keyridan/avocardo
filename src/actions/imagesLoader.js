import range from 'lodash'
import { createMasonryCellPositioner } from 'react-virtualized'
import { SET_CELL_POSITIONER, SET_IMAGE_LOADER_COLUMN_COUNT, SET_IMAGE_LOADER_WIDTH } from '../constants'
import {
  imageLoaderCacheSelector,
  imageLoaderCalculatedColumnCountSelector,
  imageLoaderCellPositionerSelector,
  imageLoaderColumnCountSelector,
  imageLoaderColumnWidthSelector,
  imageLoaderGutterSizeSelector, imageLoaderInitSelector,
} from '../selectors'

export const setImageLoaderWidth = value => ({
  type: SET_IMAGE_LOADER_WIDTH,
  payload: value,
})

export const calculateImageLoaderColumnCount = () => (dispatch, getState) => {
  return dispatch({
    type: SET_IMAGE_LOADER_COLUMN_COUNT,
    payload: imageLoaderCalculatedColumnCountSelector(getState()),
  })
}

export const initNewCellPositioner = () => (dispatch, getState) => {
  const state = getState()
  const columnWidth = imageLoaderColumnWidthSelector(state)
  const gutterSize = imageLoaderGutterSizeSelector(state)
  const cache = imageLoaderCacheSelector(state)
  const columnCount = imageLoaderColumnCountSelector(state)

  const newCellPositioner = createMasonryCellPositioner({
    cellMeasurerCache: cache,
    columnCount,
    columnWidth,
    spacer: gutterSize,
  })
  return dispatch({
    type: SET_CELL_POSITIONER,
    payload: newCellPositioner,
  })
}

export const initCellPositioner = () => (dispatch, getState) => {
  const state = getState();
  const cellPositioner = imageLoaderCellPositionerSelector(state)
  const init = imageLoaderInitSelector(state)
  if (init && typeof cellPositioner === 'undefined') {
    console.log('initCellPositioner')
    dispatch(calculateImageLoaderColumnCount())
    dispatch(initNewCellPositioner())
  }
}

export const resetCellPositioner = () => (dispatch, getState) => {
  const state = getState()
  const columnWidth = imageLoaderColumnWidthSelector(state)
  const gutterSize = imageLoaderGutterSizeSelector(state)
  const columnCount = imageLoaderColumnCountSelector(state)
  const columnHeights = range(columnCount).map(() => 0)
  const newCellPositioner = createMasonryCellPositioner({
    columnCount,
    columnWidth,
    spacer: gutterSize,
    columnHeights,
  })
  return dispatch({
    type: SET_CELL_POSITIONER,
    payload: newCellPositioner,
  })
}

export const onResize = width => (dispatch) => {
  console.log('onResize')
  dispatch(setImageLoaderWidth(width))
  dispatch(calculateImageLoaderColumnCount())
  dispatch(resetCellPositioner())
}

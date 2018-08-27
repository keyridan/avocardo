import range from 'lodash'
import { createMasonryCellPositioner } from 'react-virtualized'
import { SET_CELL_POSITIONER, SET_IMAGE_LOADER_COLUMN_COUNT, SET_IMAGE_LOADER_WIDTH } from '../constants'
import {
  imageLoaderCacheSelector,
  imageLoaderCalculatedColumnCountSelector,
  imageLoaderCellPositionerSelector,
  imageLoaderColumnCountSelector,
  imageLoaderColumnWidthSelector,
  imageLoaderGutterSizeSelector,
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

export const initCellPositioner2 = () => (dispatch, getState) => {
  const state = getState()
  const cellPositioner = imageLoaderCellPositionerSelector(state)
  if (typeof cellPositioner === 'undefined') {
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
}

export const initCellPositioner = () => (dispatch) => {
  dispatch(calculateImageLoaderColumnCount())
  dispatch(initCellPositioner2())
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
  dispatch(setImageLoaderWidth(width))
  dispatch(calculateImageLoaderColumnCount())
  dispatch(resetCellPositioner())
}

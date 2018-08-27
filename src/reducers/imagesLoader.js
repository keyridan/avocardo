import { CellMeasurerCache } from 'react-virtualized'
import {
  SET_CELL_POSITIONER,
  SET_IMAGE_LOADER_COLUMN_COUNT,
  SET_IMAGE_LOADER_WIDTH,
} from '../constants'

const defaultState = {
  columnWidth: 600,
  height: 300,
  gutterSize: 10,
  overscanByPixels: 0,
  width: 800,
  cache: new CellMeasurerCache({
    defaultHeight: 250,
    defaultWidth: 200,
    fixedWidth: true,
  }),
  cellPositioner: undefined,
}

const imagesLoader = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CELL_POSITIONER:
      return {
        ...state,
        cellPositioner: action.payload,
      }
    case SET_IMAGE_LOADER_WIDTH:
      return {
        ...state,
        width: action.payload,
      }
    case SET_IMAGE_LOADER_COLUMN_COUNT:
      return {
        ...state,
        columnCount: action.payload,
      }
    default:
      return state
  }
}

export default imagesLoader

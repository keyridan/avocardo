import { CellMeasurerCache } from 'react-virtualized'
import {
  CLOSE_IMAGE_SELECTOR_DIALOG, IMAGES_REQUEST_SUCCESS,
  SET_CELL_POSITIONER,
  SET_IMAGE_LOADER_COLUMN_COUNT,
  SET_IMAGE_LOADER_WIDTH,
} from '../constants'

const defaultWidth = 550
const defaultHeight = 500

const defaultState = {
  columnWidth: 250,
  height: defaultHeight,
  gutterSize: 10,
  width: defaultWidth,
  cache: new CellMeasurerCache({
    defaultHeight,
    defaultWidth,
    fixedWidth: true,
  }),
  cellPositioner: undefined,
  init: false,
}

const imagesLoader = (state = defaultState, action) => {
  switch (action.type) {
    case IMAGES_REQUEST_SUCCESS:
      return {
        ...state,
        init: true,
      }
    case CLOSE_IMAGE_SELECTOR_DIALOG:
      return defaultState
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

import { CellMeasurerCache } from 'react-virtualized'
import { SET_CELL_POSITIONER, SET_IMAGE_LOADER_COLUMN_COUNT, SET_IMAGE_LOADER_WIDTH, } from '../constants'

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

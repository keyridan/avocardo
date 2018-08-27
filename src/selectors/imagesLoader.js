import { createSelector } from 'reselect'

export const imageLoaderInitSelector = state => state.imagesLoader.init
export const imageLoaderHeightSelector = state => state.imagesLoader.height
export const imageLoaderWidthSelector = state => state.imagesLoader.width
export const imageLoaderColumnCountSelector = state => state.imagesLoader.columnCount
export const imageLoaderGutterSizeSelector = state => state.imagesLoader.gutterSize
export const imageLoaderColumnWidthSelector = state => state.imagesLoader.columnWidth
export const imageLoaderCellPositionerSelector = state => state.imagesLoader.cellPositioner
export const imageLoaderCacheSelector = state => state.imagesLoader.cache
export const imageLoaderCalculatedColumnCountSelector = createSelector(
  imageLoaderWidthSelector,
  imageLoaderColumnWidthSelector,
  imageLoaderGutterSizeSelector,
  (width, columnWidth, gutterSize) => {
    const columnCount = Math.floor(width / (columnWidth + gutterSize))
    console.log('columnCount: ', columnCount)
    return columnCount
  },
)


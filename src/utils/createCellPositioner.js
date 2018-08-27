import range from 'lodash'

export default function createCellPositioner(
  {
    cellMeasurerCache,
    columnCount,
    columnWidth,
    spacer = 0,
  }) {
  const columnHeights = range(columnCount).map(() => 0)

  function cellPositioner(index) {
    // Find the shortest column and use it.
    let columnIndex = 0
    for (let i = 1; i < columnHeights.length; i++) {
      if (columnHeights[i] < columnHeights[columnIndex]) {
        columnIndex = i
      }
    }

    const left = columnIndex * (columnWidth + spacer)
    const top = columnHeights[columnIndex] || 0

    columnHeights[columnIndex] =
      top + cellMeasurerCache.getHeight(index) + spacer

    return {
      left,
      top,
    }
  }

  return cellPositioner
}

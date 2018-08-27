import React from 'react'
import PropTypes from 'prop-types'
import CellMeasurer from 'react-virtualized/dist/es/CellMeasurer'
import withStyles from '@material-ui/core/styles/withStyles'
import { Masonry } from 'react-virtualized'

const styles = () => ({})

const MasonryComponent = (
  {
    itemsWithSizes, selectPhoto, columnWidth, defaultHeight, defaultWidth, cache, cellPositioner, initCellPositioner
  }) => {
  initCellPositioner()

  function cellRenderer({ index, key, parent, style }) {
    const { item, size } = itemsWithSizes[index]
    const height = columnWidth * (size.height / size.width) || defaultHeight
    return (
      <CellMeasurer cache={cache} index={index} key={key} parent={parent} >
        <div style={style}>
          <img
            src={item.src}
            style={{
              height,
              width: columnWidth,
            }}
            onClick={() => selectPhoto(item)}
          />
        </div >
      </CellMeasurer >
    )
  }

  return (
    <Masonry
      cellCount={itemsWithSizes.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRenderer}
      height={defaultHeight}
      width={defaultWidth}
    />
  )
}

MasonryComponent.propTypes = {
  columnWidth: PropTypes.number.isRequired,
  defaultHeight: PropTypes.number.isRequired,
  defaultWidth: PropTypes.number.isRequired,
  selectPhoto: PropTypes.func.isRequired,
}

export default withStyles(styles)(MasonryComponent)

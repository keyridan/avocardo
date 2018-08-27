import React from 'react'
import PropTypes from 'prop-types'
import { AutoSizer, CellMeasurer, Masonry } from 'react-virtualized'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({})

const ImagesLoader = ({
                        classes, hasNextPage, isNextPageLoading, loadNextPageImages, photos,
                        cache, cellPositioner, onResize, initCellPositioner,
                      }) => {
  function cellRenderer({ index, key, parent, style }) {
    const photo = photos[index % photos.length]

    return (
      <CellMeasurer
        cache={cache}
        index={index}
        key={key}
        parent={parent}
      >
        <div style={style} >
          <img
            src={photo.src}
            style={{
              height: 500,
              width: 500,
            }}
          />
        </div >
      </CellMeasurer >
    )
  }

  initCellPositioner()
  let masonryRef
  return (
    <AutoSizer
      onResize={({ width }) => {
        onResize(width)
        masonryRef.recomputeCellPositions()
      }}
      overscanByPixels={0}
    >
      {({ width, height }) => (
        <Masonry
          autoHeight={false}
          cellCount={photos.length}
          cellMeasurerCache={cache}
          cellPositioner={cellPositioner}
          cellRenderer={cellRenderer}
          height={height}
          overscanByPixels={0}
          ref={ref => masonryRef = ref}
          width={width}
        />
      )}
    </AutoSizer >
  )
}

ImagesLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  isNextPageLoading: PropTypes.bool.isRequired,
  loadNextPageImages: PropTypes.func.isRequired,
  onResize: PropTypes.func.isRequired,
  initCellPositioner: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImagesLoader)

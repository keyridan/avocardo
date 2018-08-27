import React from 'react'
import PropTypes from 'prop-types'
import ImageMeasurer from 'react-virtualized-image-measurer'
import withStyles from '@material-ui/core/styles/withStyles'
import MasonryContainer from '../../containers/file/MasonryContainer'

const styles = () => ({})

const ImagesLoader = (
  {
    classes, hasNextPage, isNextPageLoading, loadNextPageImages, photos, defaultHeight, defaultWidth,
  }) => {

  return (
    <ImageMeasurer
      items={photos}
      image={item => item.src}
      defaultHeight={defaultHeight}
      defaultWidth={defaultWidth}
    >
      {({ itemsWithSizes }) => (
        <MasonryContainer itemsWithSizes={itemsWithSizes} />
      )}
    </ImageMeasurer >
  )
}

ImagesLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  isNextPageLoading: PropTypes.bool.isRequired,
  loadNextPageImages: PropTypes.func.isRequired,
  defaultHeight: PropTypes.number.isRequired,
  defaultWidth: PropTypes.number.isRequired,
}

export default withStyles(styles)(ImagesLoader)

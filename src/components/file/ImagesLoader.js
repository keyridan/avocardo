import React from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({})

const ImagesLoader = ({ classes, hasNextPage, photos, isNextPageLoading, loadNextPageImages, selectPhoto }) => {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const rowCount = hasNextPage
    ? photos.length + 1
    : photos.length

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreRows = isNextPageLoading
    ? () => {
    }
    : loadNextPageImages

  // Every row is loaded except for our loading indicator row.
  const isRowLoaded = ({ index }) => {
    console.log('index: ', index)
    return !hasNextPage || index < photos.length
  }

  // Render a list item or a loading indicator.
  const rowRenderer = ({ index, key, style }) => {
    console.log('render:!!!!!!!!')

    let content
    if (!isRowLoaded({ index })) {
      content = 'Loading...'
    } else {
      console.log('ssssssss')
      content = (
        <Gallery
          photos={photos}
          onClick={(event, obj) => selectPhoto(obj)}
        />
      )
    }

    return (
      <div
        key={key}
        style={style}
      >
        {content}
      </div >
    )
  }

  return (
    <Gallery
      photos={photos}
      onClick={(event, obj) => selectPhoto(obj)}
    />
  )
}

ImagesLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
  isNextPageLoading: PropTypes.bool.isRequired,
  selectPhoto: PropTypes.func.isRequired,
  loadNextPageImages: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImagesLoader)

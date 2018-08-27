import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Masonry from 'react-masonry-infinite'

const styles = () => ({
  root: {
    height: 600,
    width: 600,
  },
})

const ImagesLoader = (
  {
    classes, hasNextPage, isNextPageLoading, loadNextPageImages, photos,
  }) => {

  return (
    <Masonry
      pack={true}
      hasMore={hasNextPage}
      loadMore={loadNextPageImages}
      sizes={[
        { columns: 1, gutter: 20 },
        { mq: '768px', columns: 2, gutter: 10 },
      ]}
    >
      {
        photos.map((photo, index) => (
          <img key={index} src={photo.src} />
        ))
      }
    </Masonry >
  )
}

ImagesLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  isNextPageLoading: PropTypes.bool.isRequired,
  loadNextPageImages: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImagesLoader)

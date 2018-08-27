import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import MasonryInfiniteScroller from 'react-masonry-infinite'

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
    <div className={classes.root} >
      <MasonryInfiniteScroller
        hasMore={hasNextPage}
        loadMore={loadNextPageImages}
      >
        {
          photos.map(photo => (
            <img key={photo.src} src={photo.src} />
          ))
        }
      </MasonryInfiniteScroller >
    </div >
  )
}

ImagesLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  isNextPageLoading: PropTypes.bool.isRequired,
  loadNextPageImages: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImagesLoader)

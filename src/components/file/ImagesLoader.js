import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import MasonryInfiniteScroller from 'react-masonry-infinite'

const styles = () => ({
  root: {
  },
})

const ImagesLoader = (
  {
    classes, hasNextPage, loadNextPageImages, photos,
  }) => {

  return (
    <div className={classes.root} >
      <MasonryInfiniteScroller
        pack={true}
        hasMore={hasNextPage}
        loadMore={() => {
          console.log('load------------------------')
          loadNextPageImages()
        }}
        sizes={[
          { columns: 1, gutter: 10 },
          { mq: '768px', columns: 2, gutter: 10 },
        ]}
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
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
  loadNextPageImages: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImagesLoader)

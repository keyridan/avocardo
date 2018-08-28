import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Masonry from 'react-masonry-infinite'

const styles = theme => ({
  img: {
    [theme.breakpoints.up('sm')]: {
      width: 275,
    },
    [theme.breakpoints.down('sm')]: {
      width: 175,
    },
  },
  loader: {},
})

const ImagesLoader = (
  {
    classes, hasNextPage, loadNextPageImages, photos, selectPhoto,
  }) => {

  return (
    <Masonry
      useWindow={false}
      initialLoad={false}
      useCapture
      pageStart={1}
      pack={true}
      loader={(<LinearProgress color="secondary" className={classes.loader} />)}
      hasMore={hasNextPage}
      loadMore={loadNextPageImages}
      sizes={[
        { columns: 1, gutter: 10 },
        { mq: '768px', columns: 2, gutter: 10 },
      ]}
    >
      {
        photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            className={classes.img}
            onClick={() => selectPhoto(photo)}
          />
        ))
      }
    </Masonry >
  )
}

ImagesLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
  loadNextPageImages: PropTypes.func.isRequired,
  selectPhoto: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImagesLoader)

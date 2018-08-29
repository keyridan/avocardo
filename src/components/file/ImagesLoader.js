import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Masonry from 'react-masonry-infinite'
import styled from '../../utils/styled'

const styles = () => ({
  loader: {},
})

const ImagesLoader = (
  {
    classes, hasNextPage, loadNextPageImages, photos, selectPhoto,
  }) => {

  return (
    <Masonry
      useWindow={false}
      threshold={600}
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
        photos.map((photo, index) => {
          const StyledImage = styled('img')(({ theme, props }) => ({
            [theme.breakpoints.up('sm')]: {
              width: 275,
              height: Math.ceil(props.height * 275 / props.width),
            },
            [theme.breakpoints.down('sm')]: {
              width: 175,
              height: Math.ceil(props.height * 175 / props.width),
            },
          }))
          return (
            <StyledImage
              key={index}
              height={photo.height}
              width={photo.width}
              src={photo.src}
              onClick={() => selectPhoto(photo)}
            />
          )
        })
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

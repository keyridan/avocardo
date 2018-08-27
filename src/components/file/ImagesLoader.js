import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { GridLayout } from '@egjs/react-infinitegrid'

const styles = () => ({
  root: {},
})

const ImagesLoader = (
  {
    classes, nextPageLoading, hasNextPage, loadNextPageImages, photos,
  }) => {

  return (
    <div className={classes.root} >
      <GridLayout
        threshold={100}
        isOverflowScroll={false}
        isEqualSize={false}
        horizontal={false}
        loading={<div className="loading" >LOADING...</div >}
        onLayoutComplete={(e) => {
          !e.isLayout && e.endLoading()
        }}
        onAppend={(e) => {
          const groupKey = parseFloat(e.groupKey || 0) + 2
          e.startLoading()
          loadNextPageImages(groupKey)
          !hasNextPage && e.endLoading()
        }}
      >
        {
          photos.map(photo => (
            <div className="item" groupKey={photo.groupKey} >
              <img key={photo.src} src={photo.src} />
            </div >
          ))
        }
      </GridLayout >
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

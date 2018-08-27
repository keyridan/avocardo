import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { GridLayout } from '@egjs/react-infinitegrid'

const styles = () => ({
  root: {
    height: 550,
    width: 550,
  },
  img: {
    height: 250,
    width: 250,
  },
})

const ImagesLoader = (
  {
    classes, nextPageLoading, hasNextPage, loadNextPageImages, photos, selectPhoto,
  }) => {

  return (
    <div className={classes.root} >
      <GridLayout
        margin={10}
        threshold={300}
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
              <img
                className={classes.img}
                key={photo.src}
                src={photo.src}
                onClick={() => selectPhoto(photo)}
              />
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
    groupKey: PropTypes.number,
  })).isRequired,
  loadNextPageImages: PropTypes.func.isRequired,
  selectPhoto: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImagesLoader)

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Slider from '@material-ui/lab/Slider'
import Cropper from 'react-easy-crop'
import Grid from '@material-ui/core/Grid'
import ImageLoaderContainer from '../../containers/file/ImageLoaderContainer'
import { getCroppedImg, readFile } from '../../utils/image'

const styles = theme => ({
  input: {},
  crop: {
    width: '100%',
    height: 500,
    position: 'relative',
  },
  controls: {
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
      width: '50%',
      height: 80,
      display: 'flex',
      alignItems: 'center',
    },
    display: 'none',
  },
  slider: {
    width: 200,
    height: 10,
  },
})

const ImageCropper = ({
  classes, zoom, crop, imageSrc, aspect, cropCompleted, changeZoom, changeCrop, changeFile,
}) => (
  <div >
    <Grid container >
      <Grid item xs={12} sm={2} >
        <input
          accept="image/*"
          type="file"
          className={classes.input}
          onChange={async (event) => {
            if (event.target.files && event.target.files.length > 0) {
              const imageDataUrl = await readFile(event.target.files[0])
              changeFile(imageDataUrl)
            }
          }}
        />
      </Grid >
      <Grid item xs={12} sm={9} >
        <ImageLoaderContainer />
      </Grid >
      {imageSrc && (
      <Grid item xs={12} >
        <Fragment >
          <div className={classes.crop} >
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              onCropChange={changeCrop}
              onCropComplete={async (_, croppedAreaPixels) => {
                  const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels)
                  cropCompleted(croppedImage)
                }}
              onZoomChange={changeZoom}
            />
          </div >
          <div className={classes.controls} >
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(_, zoomValue) => changeZoom(zoomValue)}
            />
          </div >
        </Fragment >
      </Grid >
      )}
    </Grid >
  </div >
)

ImageCropper.propTypes = {
  classes: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  aspect: PropTypes.number.isRequired,
  crop: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  cropCompleted: PropTypes.func.isRequired,
  changeZoom: PropTypes.func.isRequired,
  changeCrop: PropTypes.func.isRequired,
  changeFile: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImageCropper)

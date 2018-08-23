import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Slider from '@material-ui/lab/Slider'
import Cropper from 'react-easy-crop'
import { getCroppedImg, readFile } from '../../utils/image'

const styles = () => ({
  inputCropContainer: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
  },
  input: {
    display: 'flex',
    flex: '0 1 30px',
  },
  cropContainer: {
    display: 'flex',
    flex: '1 0 auto',
    flexFlow: 'column',
  },
  crop: {
    position: 'relative',
    display: 'flex',
    flex: '1 0 auto',
  },
  slider: {
    alignSelf: 'center',
    display: 'flex',
    flex: '0 1 30px',
    width: '50%',
  },
})

const ImageCropper = ({
                        classes, zoom, crop, imageSrc, aspect, cropCompleted, changeZoom, changeCrop, changeFile,
                      }) => (
  <div className={classes.inputCropContainer} >
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
    {imageSrc && (
      <div className={classes.cropContainer} >
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
          <div className={classes.slider} >
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
      </div >
    )}
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

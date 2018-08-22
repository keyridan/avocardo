import { connect } from 'react-redux'
import ImageCropper from '../components/file/ImageCropper'
import {
  changeCrop, changeFile,
  changeZoom, cropCompleted,
} from '../actions'
import { aspectSelector, cropSelector, croppedImageSelector, imageSrcSelector, zoomSelector } from '../selectors'

const mapStateToProps = state => ({
  imageSrc: imageSrcSelector(state),
  crop: cropSelector(state),
  zoom: zoomSelector(state),
  aspect: aspectSelector(state),
  croppedImage: croppedImageSelector(state),
})

const mapDispatchToProps = {
  changeZoom,
  changeCrop,
  changeFile,
  cropCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCropper)

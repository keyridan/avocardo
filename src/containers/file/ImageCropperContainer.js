import { connect } from 'react-redux'
import ImageCropper from '../../components/file/ImageCropper'
import { changeCrop, changeFile, changeZoom, cropCompleted } from '../../actions/index'
import {
  aspectSelector,
  croppedImageSelector,
  cropSelector,
  imageSrcSelector,
  zoomSelector,
} from '../../selectors/index'

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

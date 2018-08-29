import { connect } from 'react-redux'
import AddImageDialog from '../../components/file/AddImageDialog'
import { imageNotEmptySelector, openInputImageSelector } from '../../selectors'
import { addOrUpdateBackSideImageValueAndClean, closeAndClean, } from '../../actions'

const mapStateToProps = state => ({
  openInputImage: openInputImageSelector(state),
  imageNotEmpty: imageNotEmptySelector(state),
})

const mapDispatchToProps = {
  addOrUpdateBackSideImageValueAndClean,
  closeAndClean,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddImageDialog)

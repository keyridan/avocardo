import { connect } from 'react-redux'
import ImageSelectorDialog from '../../components/file/ImageSelectorDialog'
import { imageSelectorDialogStateSelector, photosSelector } from '../../selectors'
import { selectPhoto, changeImageSelectorDialogState } from '../../actions'

const mapStateToProps = (state) => ({
  imageSelectorDialogState: imageSelectorDialogStateSelector(state),
  photos: photosSelector(state),
})

const mapDispatchToProps = {
  selectPhoto,
  changeImageSelectorDialogState,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageSelectorDialog)

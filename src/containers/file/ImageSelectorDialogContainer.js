import { connect } from 'react-redux'
import ImageSelectorDialog from '../../components/file/ImageSelectorDialog'
import { imageSelectorDialogStateSelector } from '../../selectors'
import { closeImageSelectorDialog } from '../../actions'

const mapStateToProps = state => ({
  imageSelectorDialogState: imageSelectorDialogStateSelector(state),
})

const mapDispatchToProps = {
  closeImageSelectorDialog,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageSelectorDialog)

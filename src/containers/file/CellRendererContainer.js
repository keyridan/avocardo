import { connect } from 'react-redux'
import CellRenderer from '../../components/file/CellRenderer'
import { imageLoaderCacheSelector, imageLoaderColumnWidthSelector, photosSelector } from '../../selectors'
import { selectPhoto } from '../../actions'

const mapStateToProps = (state) => ({
  photos: photosSelector(state),
  columnWidth: imageLoaderColumnWidthSelector(state),
  cache: imageLoaderCacheSelector(state),
})

const mapDispatchToProps = {
  selectPhoto,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CellRenderer)

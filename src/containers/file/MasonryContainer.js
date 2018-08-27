import { connect } from 'react-redux'
import MasonryComponent from '../../components/file/MasonryComponent'
import { initCellPositioner, selectPhoto } from '../../actions'
import {
  imageLoaderCacheSelector,
  imageLoaderCellPositionerSelector,
  imageLoaderColumnWidthSelector,
  imageLoaderHeightSelector, imageLoaderWidthSelector,
} from '../../selectors'

const mapStateToProps = state => ({
  cache: imageLoaderCacheSelector(state),
  cellPositioner: imageLoaderCellPositionerSelector(state),
  columnWidth: imageLoaderColumnWidthSelector(state),
  defaultHeight: imageLoaderHeightSelector(state),
  defaultWidth: imageLoaderWidthSelector(state),
})

const mapDispatchToProps = {
  selectPhoto,
  initCellPositioner,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasonryComponent)

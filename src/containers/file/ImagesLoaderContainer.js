import { connect } from 'react-redux'
import ImagesLoader from '../../components/file/ImagesLoader'
import {
  hasNextPageImagesSelector,
  imageLoaderCacheSelector,
  imageLoaderCellPositionerSelector,
  imageUrlSelector,
  nextPageLoadingSelector, photosSelector,
} from '../../selectors'
import { initCellPositioner, loadNextPageImages, onResize } from '../../actions'

const mapStateToProps = state => ({
  hasNextPage: hasNextPageImagesSelector(state),
  isNextPageLoading: nextPageLoadingSelector(state),
  cache: imageLoaderCacheSelector(state),
  cellPositioner: imageLoaderCellPositionerSelector(state),
  imageUrl: imageUrlSelector(state),
  photos: photosSelector(state),
})

const mapDispatchToProps = {
  onResize,
  initCellPositioner,
  loadNextPageImages,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesLoader)

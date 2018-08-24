import { connect } from 'react-redux'
import ImagesLoader from '../../components/file/ImagesLoader'
import { hasNextPageImagesSelector, nextPageLoadingSelector, photosSelector } from '../../selectors'
import { loadNextPageImages, selectPhoto } from '../../actions'

const mapStateToProps = state => ({
  hasNextPage: hasNextPageImagesSelector(state),
  photos: photosSelector(state),
  isNextPageLoading: nextPageLoadingSelector(state),
})

const mapDispatchToProps = {
  loadNextPageImages,
  selectPhoto,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesLoader)
